import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { screen1,row } from 'src/seats';
import { moviesDto, reserveDto } from './dto/movie.dto';
import { check } from 'prettier';

@Injectable()
export class MoviesService {
    constructor(private prisma:PrismaService){}
    async createMovie(dto:moviesDto){
        const {name,about,cast,categories,crew,duration,language,like,poster,releaseDate,trailer,type,screen,showTime} = dto;

        const res = await this.prisma.movie.create({
                data: {
                  name,about,cast,categories,crew,duration,language,like,poster,releaseDate,trailer,type,seats:row,showTime,screen
                }
        })
        
        return res;
    }

    async getMovies(){
      const res = await this.prisma.movie.findMany()
      return res;
    }

    async updateSeats(dto:reserveDto){
      let {id,selected,selectedSeats}=dto;
      let movie = await this.prisma.movie.findUnique({where:{id}});
      let check = checkSeats(movie,selected);
      
      if(check){
         return "Seats are accoupied!"
      }else{
        let movie = await this.prisma.movie.update({where:{id},data:{seats:selectedSeats}})
        return movie;
      }
      

      
    }
}


const checkSeats = (movie:any,selected:any)=>{
   let accupied = false
   selected.map((e:any)=>{
    if(movie.seats[e.rowId].s[e.colId].bu){
      accupied = true;
    }
    
   })
   if(!accupied){
      return false
   }else{
      return true
   }
}