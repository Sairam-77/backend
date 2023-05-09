import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ticketDto } from './dto/ticket.dto';

@Injectable()
export class TicketService {
     constructor(private prisma:PrismaService){}

      async createTicket(dto:ticketDto){
        // const {name,about,cast,categories,crew,duration,language,like,poster,releaseDate,trailer,type,screen,showTime} = dto;

        const res = await this.prisma.ticket.create({
                data:{ ...dto}
        })
        
        return res;
    } 

        async listMovie(payload:any){
        // const {name,about,cast,categories,crew,duration,language,like,poster,releaseDate,trailer,type,screen,showTime} = dto;

        const res = await this.prisma.ticket.findMany(payload)
        
        return res;
    } 
}
