import { ArrayMinSize, isArray, IsArray, IsEmail, IsNotEmpty ,IsString,Length} from 'class-validator';

export class   moviesDto {
  @IsNotEmpty()
  public name:string 

  @IsNotEmpty()
  public type:string

  @IsNotEmpty()
  public trailer:string

  @IsArray()
  @ArrayMinSize(1)
  @IsNotEmpty()
  public language:string[]

  @IsNotEmpty()
  public releaseDate:string

  @IsNotEmpty()
  public about:string

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  public cast:string[]
  
  @IsArray()
  @ArrayMinSize(1)
  @IsNotEmpty()
  public crew:string[]

  @IsNotEmpty()
  public poster:string

  @IsArray()
  @ArrayMinSize(1)
  @IsNotEmpty()
  public categories:string[]

  @IsNotEmpty()
  public duration:string

  @IsNotEmpty()
  public like:string

  @IsArray()
  @ArrayMinSize(1)
  @IsNotEmpty()
  public showTime:string[]

  @IsNotEmpty()
  public screen:number

}

export class  reserveDto{
  @IsArray()
  @IsNotEmpty()
  public selected:[]

  @IsNotEmpty()
  public id:string

  @IsArray()
  @IsNotEmpty()
  public selectedSeats:[]


}