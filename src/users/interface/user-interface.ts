import { UserRoles } from "@prisma/client";

export interface ICreateUserLogin {
  username: string;
  password: string;

}