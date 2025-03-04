import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class createUserDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}