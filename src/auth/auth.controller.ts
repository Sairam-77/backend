import { Controller ,Post,Get,Body,Param,Res,Req,Headers} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, singDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  singUp(@Body() dto:AuthDto){
    return this.authService.signUp(dto);
  }

  @Post('signin')
  singIn(@Body() dto:singDto, @Req() req, @Res() res){
    return this.authService.signIn(dto,req,res);
  }

  @Get('signout')
  singOut(@Req() req, @Res() res){
    return this.authService.signOut(req,res)
  }

  @Get('/d')
  decode(@Headers('Authorization') auth: string){
    return this.authService.decodeToken(auth)
  }
}
