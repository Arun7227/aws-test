import { IsEmail, isString, IsString } from "class-validator";

export class getUserRessDto{
    @IsString()
    id:string

    @IsEmail()
    @IsString()
    email:string

    @IsString()
    password:string
}