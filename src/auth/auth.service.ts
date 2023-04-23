import { Injectable ,BadRequestException, UnauthorizedException, ForbiddenException, Res} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto, singDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt'
import { jwtSecret } from './utils/constants';
// import {} from 'cookie-parser'
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
    constructor(private prisma:PrismaService , private jwt:JwtService){}

    async signUp(dto:AuthDto){
        const {email,password,userName,isAdmin} = dto;
        const foundUser = await this.prisma.user.findUnique({where:{email}})
        if(foundUser){
            throw new BadRequestException('Email already exists')
        }
        const Password = await this.hashing(password);
    
        const User = await this.prisma.user.create({
                data: {
                    // ... data to create a User
                    email,Password,userName,isAdmin
                }
        })
        
        return{
            message:"User Created Successfull",
            statusCode:201,
            status:true
        }
    }

    async signIn(dto:singDto,req:Request,res:Response){

        const {email,password} = dto;

        const isFound = await this.prisma.user.findUnique({where: {email}})

        if(!isFound){
            throw new BadRequestException("Email not exist");
        }

        const match = await bcrypt.compare(password, isFound.Password)

        if(!match) {
            throw new BadRequestException("Wrong Password");
        }

        const token = await this.signToken({id:isFound.id,email:isFound.email});

        if(!token){
            throw new ForbiddenException();
        }
               
        return res.send(
            {
                message:'Logged in succefully',
                details:{email:isFound.email,userName:isFound.userName,admin:isFound.isAdmin},
                token:token,
                statusCode:201,
                status:true
            }
        )
        
    }

    async signOut(req:Request,res:Response){ 
        const token = req.cookies.token;
        res.clearCookie('token')
        return res.send({message:'Logged out',token:token})
    }

    async hashing(password:string){
        const saltOrRounds = 10;
        const hashedPassword =await bcrypt.hash(password, saltOrRounds);
        return hashedPassword;
    }

    async signToken(args:{id:string,email:string}){
        const payload = args;

        return this.jwt.signAsync(payload,{secret:jwtSecret})
       
    }

    async decodeToken(token:string) {
        const decode = this.jwt.decode(token);
        return decode;
    }
}
