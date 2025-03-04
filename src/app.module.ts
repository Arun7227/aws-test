import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ExpenseModule } from './expense/expense.module';

@Module({
  imports: [UsersModule, ExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
