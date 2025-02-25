import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Prisma/prisma.service';
import { createExpense } from './dto/expense.dto';

@Injectable()
export class ExpenseService {
    constructor(
        private readonly prismaService: PrismaService
    ) {}
   addExpense(createExpense: createExpense) {
    return this.prismaService.expense.create({
      data:createExpense,
    });
   }
   async getUserExpense(id:string){
    return await this.prismaService.expense.findMany({
      where:{
        userId:id
      },
        orderBy:{
            date:'desc'
        }
    }); 
   }
    async deleteExpense(id:string){
     return await this.prismaService.expense.delete({
        where:{
          id:id
        }
     });
    }

}
