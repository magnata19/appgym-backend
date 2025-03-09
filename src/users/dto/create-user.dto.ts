import { Perfil } from "@prisma/client";
import { EnderecoDto } from "./endereco-dto";
import { TreinoDto } from "./treino-dto";

export class CreateTreinadorDto {
  nome: string;
  cpf: string;
  dataNascimento: string;
  salario: number;
  endereco: EnderecoDto
  treinos: TreinoDto[]
  perfil: Perfil;

}
