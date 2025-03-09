import { Injectable } from '@nestjs/common';
import { CreateTreinadorDto } from './dto/create-user.dto';
import { PrismaService } from 'src/config/prisma-config';
import { TreinoDto } from './dto/treino-dto';
import { Treinadores, Treinos } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }

  async create(createTreinadorDto: CreateTreinadorDto): Promise<any> {
    const treinador = await this.prismaService.treinadores.create({
      data: {
        nome_treinador: createTreinadorDto.nome,
        cpf_treinador: createTreinadorDto.cpf,
        data_nascimento: createTreinadorDto.dataNascimento,
        salario_treinador: createTreinadorDto.salario,
        endereco_treinador: {
          create: {
            estado: createTreinadorDto.endereco.cidade,
            cidade: createTreinadorDto.endereco.cidade,
            bairro: createTreinadorDto.endereco.bairro,
            rua: createTreinadorDto.endereco.rua,
            numero: createTreinadorDto.endereco.numero
          }
        },
        perfil: createTreinadorDto.perfil,
      }
    })
    return
  }

  async criarTreino(treinoDto: TreinoDto): Promise<any> {
    const treino = await this.prismaService.treinos.create({
      data: {
        tipo_treino: treinoDto.tipoTreino,
        descricao_treino: treinoDto.descricaoTreino,
        dia_da_semana: treinoDto.diaDaSemana,
        quantidade_repeticoes: treinoDto.quantidadeRepeticoes,
        quantidade_series: treinoDto.quantidadeSeries,
      }
    })
    return treino;
  }

  async anexarTreino(treinadorDto: Treinadores, treinoDto: Treinos) {

  }

  findAll(): Promise<any> {
    return this.prismaService.treinadores.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
