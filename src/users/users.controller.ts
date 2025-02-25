import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Post()
  async create(
    @Body() createusers:createUserDto
  ){
    return this.usersService.createUser(createusers);
  }
  @Get()
  async getUsers(){
    return this.usersService.getUsers();
  }
  @Delete()
  async deleteusers(
    @Param('id') id:string
  ){
    return this.usersService.deleteusers(id);
  }
}
