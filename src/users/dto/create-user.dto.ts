import { $Enums, UserRoles } from "@prisma/client";
import { ICreateUserLogin } from "../interface/user-interface";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserLogin implements ICreateUserLogin {

  @IsString()
  @IsNotEmpty()
  username: string;


  @IsString()
  @IsNotEmpty()
  senha: string;

}
