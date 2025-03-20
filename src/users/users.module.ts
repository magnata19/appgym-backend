import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/config/prisma-config';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UsersService, PrismaService],
})
export class UsersModule { }

