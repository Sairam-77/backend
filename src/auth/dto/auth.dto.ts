import { IsEmail, IsNotEmpty ,IsString,Length} from 'class-validator';

export class AuthDto {
  @IsEmail({},{message:'Please enter correct email'})
  @IsString()
  @IsNotEmpty()
  public email: string

  @IsNotEmpty()
  public userName:string

  @IsNotEmpty()
  @IsString()
  @Length(3,20,{message:'Password has minimum 3 and maximum 20 in length'})
  public password: string;

  public isAdmin?:boolean;
}


export class singDto{
  @IsEmail({},{message:'Please enter correct email'})
  @IsString()
  @IsNotEmpty()
  public email: string

  @IsNotEmpty()
  @IsString()
  @Length(3,20,{message:'Password has minimum 3 and maximum 20 in length'})
  public password: string;
}