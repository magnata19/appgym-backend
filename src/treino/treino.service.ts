import { Injectable } from '@nestjs/common';
import { Profile, User } from '@prisma/client';
import { PrismaService } from 'src/config/prisma-config';
import { ITreinoDto } from './interface/treino-dto';
import { IRequest } from 'src/users/interface/custom-request';

@Injectable()
export class TreinoService {
  constructor(private prismaService: PrismaService) { }

  async criarTreino(treinoDto: ITreinoDto) {

    let user: IRequest["user"];

    const currentUser = await this.prismaService.user.findFirstOrThrow({
      where: { id: user?.id }
    })

    const treino = await this.prismaService.treinos.create({
      data: {
        userId: currentUser.id,
        descricaoTreino: treinoDto.descricaoTreino,
        diaDaSemana: treinoDto.diaDaSemana,
        quantidadeRepeticoes: treinoDto.quantidadeRepeticoes,
        quantidadeSeries: treinoDto.quantidadeSeries,
        tipoTreino: treinoDto.tipoTreino
      }
    })

    return { treino }
  }
}
