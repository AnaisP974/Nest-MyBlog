import { IsString, Length, IsNotEmpty, MinLength, MaxLength } from "class-validator";
export class AddPostDto {
  
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 5000)
  @MinLength(8, {
    message: "Doit contenir un minimum de 8 caractères."
  })
  @MaxLength(5000, {
    message: "Doit contenir un maximum de 5000 caractères."
  })
  readonly content: string;
}