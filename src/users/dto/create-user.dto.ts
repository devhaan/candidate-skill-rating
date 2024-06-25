import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { IsEnum } from './../../../node_modules/class-validator/esm5/decorator/typechecker/IsEnum';

export class CreateUserDto {
  @IsEmail()
  email: string;

  
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  passwordConfirm: string;

  @IsString()
  phone_no: string;

  @IsString()
  role: string;

  @IsOptional()
  active: boolean;


}
