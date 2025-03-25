import { BadRequestException, Injectable, NotFoundException, Req, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma-config';
import { User, UserRoles } from '@prisma/client';
import { ICreateProfileDto } from './interface/profile-dto';
import * as bcrypt from 'bcrypt';
import { CreateUserLogin } from './dto/create.user.dto';
import { IRequest } from './interface/custom-request';
import { profile } from 'console';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }

  async createUser(loginDto: CreateUserLogin): Promise<any> {
    try {
      const hashedPassword = await bcrypt.hashSync(loginDto.password, 10);
      const userLogin = await this.prismaService.user.create({
        data: {
          username: loginDto.username,
          senha: hashedPassword,
          perfil: UserRoles.ALUNO,
        }
      })
      return { login: userLogin }
    } catch (err: any) {
      throw new UnprocessableEntityException("Usuário já cadastrado.", err)
    }
  }


  async createUserProfile(user: IRequest['user'], profile: ICreateProfileDto) {
    try {
      const currentUser = await this.prismaService.user.findFirst({
        where: { id: user?.id }
      })
      console.log(user)
      const userProfile = await this.prismaService.profile.create({
        data: {
          userId: currentUser?.id,
          nome: profile.nome,
          sobrenome: profile.sobrenome,
          cpf: profile.cpf,
          data_nascimento: profile.cpf,
          salario: profile.salario,
          endereco: {
            create: {
              cidade: profile.endereco.cidade,
              estado: profile.endereco.estado,
              bairro: profile.endereco.bairro,
              rua: profile.endereco.rua,
              numero: profile.endereco.numero
            }
          }
        }
      })
      console.log(userProfile)
      return { profile: userProfile }
    } catch (err) {
      throw new BadRequestException("Deu ruim", err.message)
    }
  }

  async getCurrentProfile(id: number): Promise<any> {
    const profile = await this.prismaService.profile.findFirst({
      where: { id: id },
      include: {
        user: true,
        endereco: true,
      }
    })
    return { profile }
  }

  async getCurrentUser(id: number): Promise<any> {
    const user = await this.prismaService.user.findFirst({
      where: { id: id },
      include: {
        profile: true,
        Treinos: true
      }
    })

    return user;
  }
}
