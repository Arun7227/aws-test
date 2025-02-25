import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { createExpense } from './dto/expense.dto';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

 @Post()
 async addExpense(
   @Body() createExpense:createExpense
 ){
   return this.expenseService.addExpense(createExpense);
 }

 @Get()
  async getUserExpense(
    @Param('userId') userId:string  
  ){
    return this.expenseService.getUserExpense(userId);
  }

@Delete()
  async deleteExpense(
    @Param('id') id:string
  ){
    return this.expenseService.deleteExpense(id);
  }

}
