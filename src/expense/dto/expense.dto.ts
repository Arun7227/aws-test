import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class createExpense{
    @IsString()
    @IsNotEmpty()
    title:string
    @IsNumber()
    @IsNotEmpty()
    amount:number
    @IsDate()
    @IsNotEmpty()
    date:Date
    @IsString()
    @IsNotEmpty()
    userId:string
}