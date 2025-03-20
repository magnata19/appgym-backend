import { Public } from "src/auth/constants/constant";
import { UsersService } from "./users.service";
import { Body, Controller, Post } from "@nestjs/common";
import { ICreateUserLogin } from "./interface/user-interface";
import { CreateUserLogin } from "./dto/create.user.dto";

@Controller('register')
export class UserController {

  constructor(private userService: UsersService) {
  }

  @Public()
  @Post()
  async createUser(@Body() createUser: CreateUserLogin): Promise<{ user: ICreateUserLogin }> {
    return await this.userService.createUser(createUser);
  }
}
