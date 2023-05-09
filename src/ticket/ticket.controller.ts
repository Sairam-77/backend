import { Body, Controller, Get, Post } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { ticketDto } from './dto/ticket.dto';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post('/create')
  createTicket(@Body() dto:ticketDto){
    return this.ticketService.createTicket(dto);
  }

  @Post('/list')
  listMovie(@Body() data:any){
    return this.ticketService.listMovie(data);
  }

  // @UseGuards(JwtAuthGuard)
  // @Get()
  // getMovies(){
  //   return this.moviesService.getMovies();
  // }
}
