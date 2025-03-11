import { IsNotEmpty, IsString } from "class-validator";
import { ICreateProfileDto } from "../interface/profile-dto";
import { ICreateEnderecoDto } from "../interface/endereco-dto";

export class EnderecoDto implements ICreateEnderecoDto {

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsString()
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @IsNotEmpty()
  rua: string;

  @IsString()
  @IsNotEmpty()
  numero: number;
}