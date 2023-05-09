import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { MoviesModule } from './movies/movies.module';
import { TicketModule } from './ticket/ticket.module';


@Module({
  imports: [AuthModule,PrismaModule, MoviesModule, TicketModule],
  
})
export class AppModule {}
