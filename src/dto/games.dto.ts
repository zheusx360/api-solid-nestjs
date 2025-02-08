import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator'

export class GamesDTO {

   @IsNotEmpty()
   @IsString()
   @MinLength(2)
   @MaxLength(100)
   @IsString()
   readonly title: string

   @IsNotEmpty()
   @IsString()
   @MinLength(2)
   @MaxLength(50)
   @IsString()
   readonly genre: string

   @IsNotEmpty()
   @IsString()
   @MinLength(2)
   @MaxLength(50)
   @IsString()
   readonly publisher: string

   @IsNotEmpty()
   @IsString()
   @MinLength(2)
   @MaxLength(30)
   @IsString()
   readonly language: string

   @IsNotEmpty()
   @IsNumber()
   @Min(1900)
   @Max(9999)
   readonly releaseYear: number

   @IsNotEmpty()
   @IsNumber()
   @Min(1)
   @Max(99)
   readonly classification: number
}