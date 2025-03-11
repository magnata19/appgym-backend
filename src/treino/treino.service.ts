import { Injectable } from '@nestjs/common';
import { Profile, User } from '@prisma/client';
import { PrismaService } from 'src/config/prisma-config';
import { ITreinoDto } from './interface/treino-dto';

@Injectable()
export class TreinoService {
  constructor(private prismaService: PrismaService) { }

  async criarTreino(id: number, treinoDto: ITreinoDto) {
    const profileFound = await this.prismaService.profile.findFirst({ where: { profile_id: id } })
    const treino = await this.prismaService.treinos.create({
      data: {
        treino_id: profileFound?.id,
        descricao_treino: treinoDto.descricaoTreino,
        dia_da_semana: treinoDto.diaDaSemana,
        quantidade_repeticoes: treinoDto.quantidadeRepeticoes,
        quantidade_series: treinoDto.quantidadeSeries,
        tipo_treino: treinoDto.tipoTreino
      }
    })

    return { treino: treino }
  }
}
