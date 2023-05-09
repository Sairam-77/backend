import { ArrayMinSize, isArray, IsArray, IsEmail, IsNotEmpty ,IsString,Length} from 'class-validator';



export class   ticketDto {
  @IsEmail()
  @IsNotEmpty()
  public email:string 

  @IsNotEmpty()
  public name:string

  @IsNotEmpty()
  public type:string

  @IsArray()
  @ArrayMinSize(1)
  @IsNotEmpty()
  public seats:string[]

  @IsNotEmpty()
  public showTime:string

  @IsNotEmpty()
  public date:string

  @IsNotEmpty()
  public screen:string



}