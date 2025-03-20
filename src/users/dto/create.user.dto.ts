import { ICreateUserLogin } from "../interface/user-interface";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserLogin implements ICreateUserLogin {

  @IsString()
  @IsNotEmpty()
  username: string;


  @IsString()
  @IsNotEmpty()
  password: string;

}
