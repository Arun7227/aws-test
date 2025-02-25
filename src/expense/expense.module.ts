import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { PrismaService } from 'src/Prisma/prisma.service';

@Module({
  controllers: [ExpenseController],
  providers: [ExpenseService,PrismaService],
})
export class ExpenseModule {}
