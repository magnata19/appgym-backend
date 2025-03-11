import { IsNotEmpty, IsString } from "class-validator";
import { ITreinoDto } from "../interface/treino-dto";

export class TreinoDto implements ITreinoDto {

  @IsString()
  @IsNotEmpty()
  tipoTreino: string;

  @IsString()
  @IsNotEmpty()
  descricaoTreino: string;

  @IsString()
  @IsNotEmpty()
  quantidadeSeries: string;

  @IsString()
  @IsNotEmpty()
  quantidadeRepeticoes: string;

  @IsString()
  @IsNotEmpty()
  diaDaSemana: string;
}