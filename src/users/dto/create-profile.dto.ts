import { IsNotEmpty, IsString } from "class-validator";
import { ICreateEnderecoDto } from "../interface/endereco-dto";
import { ICreateProfileDto } from "../interface/profile-dto";

export class CreateProfileDto implements ICreateProfileDto {

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  sobrenome: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  data_nascimento: string;

  @IsNotEmpty()
  salario: number;

  endereco: ICreateEnderecoDto;

}