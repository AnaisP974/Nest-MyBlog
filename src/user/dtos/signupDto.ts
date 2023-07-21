/* eslint-disable prettier/prettier */
import { IsString, IsEmail, Length, IsNotEmpty, MinLength, MaxLength } from "class-validator";
export class SignupDto {

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  @MinLength(3, {
    message: "Doit contenir un minimum de 3 caractères."
  })
  @MaxLength(50, {
    message: "Doit contenir un maximum de 50 caractères."
  })
  readonly username: string;
  
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 50)
  @MinLength(8, {
    message: "Doit contenir un minimum de 8 caractères."
  })
  @MaxLength(50, {
    message: "Doit contenir un maximum de 50 caractères."
  })
  readonly password: string;
}
