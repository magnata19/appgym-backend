import { ICreateEnderecoDto } from "./endereco-dto";

export interface ICreateProfileDto {
  nome: string;
  sobrenome: string;
  cpf: string;
  data_nascimento: string;
  salario: number;
  endereco: ICreateEnderecoDto;
}