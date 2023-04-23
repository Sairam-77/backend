import { Controller,Body,Get,Post, UseGuards, Put } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { moviesDto, reserveDto } from './dto/movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  //Create movie
  @Post()
  createMovie(@Body() dto:moviesDto){
    return this.moviesService.createMovie(dto);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  getMovies(){
    return this.moviesService.getMovies();
  }

  @Put()
  updateSeats(@Body() dto:reserveDto){
    return this.moviesService.updateSeats(dto)
  }
}
