import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Prisma/prisma.service';
import { createUserDto } from './dto/create-users.dto';
import { getUserRessDto } from './dto/get-users.dto';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UsersService {
constructor(
    private prisma: PrismaService
){}
   async createUser(createusers: createUserDto) {
        const createUsers=await this.prisma.user.create({data:createusers});
        return createUsers;
   }
   async getUsers():Promise<getUserRessDto[]>{
       return await this.prisma.user.findMany();
   }
   async deleteusers(id:string){
       return await this.prisma.user.delete({
              where:{
                id:id
              }
       })
   }

   async hashPassword(password):Promise<string>{
    const hashpassword=await bcrypt.hash(password,10);
    return hashpassword;
   }
    async comparePassword(password:string,hash:string):Promise<boolean>{
         return await bcrypt.compare(password,hash);
    }
}
