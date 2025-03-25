import { Public } from "src/auth/constants/constant";
import { UsersService } from "./users.service";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ICreateUserLogin } from "./interface/user-interface";
import { CreateUserLogin } from "./dto/create.user.dto";
import { ICreateProfileDto } from "./interface/profile-dto";
import { User } from "@prisma/client";
import { IRequest } from "./interface/custom-request";

@Controller('users')
export class UserController {

  constructor(private userService: UsersService) {
  }

  @Public()
  @Post('register')
  async createUser(@Body() createUser: CreateUserLogin): Promise<{ user: ICreateUserLogin }> {
    return await this.userService.createUser(createUser);
  }

  @Post("profile")
  async createProfile(@Body() user: IRequest['user'], @Body() profileDto: ICreateProfileDto): Promise<any> {
    return await this.userService.createUserProfile(user, profileDto);
  }

  @Get('profile/:id')
  // @Public()
  async getAllUsers(@Param('id') id: number): Promise<Array<User>> {
    return await this.userService.getCurrentProfile(Number(id));
  }

  @Get('/:id')
  async getCurrentUser(@Param('id') id: number): Promise<any> {
    return this.userService.getCurrentUser(+id);
  }
}

