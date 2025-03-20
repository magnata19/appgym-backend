import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma-config';
import { User, UserRoles } from '@prisma/client';
import { ICreateProfileDto } from './interface/profile-dto';
import * as bcrypt from 'bcrypt';
import { CreateUserLogin } from './dto/create.user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }

  async createUser(loginDto: CreateUserLogin): Promise<any> {
    const hashedPassword = await bcrypt.hashSync(loginDto.password, 10);
    const userLogin = await this.prismaService.user.create({
      data: {
        username: loginDto.username,
        senha: hashedPassword,
        perfil: UserRoles.ALUNO,
      }
    })
    return { login: userLogin }
  }


  async createUserProfile(user: User, profile: ICreateProfileDto) {
    const existingUser = await this.prismaService.user.findFirst({ where: { id: user.id } })
    if (!existingUser) {
      throw new NotFoundException("Usuário não encontrado.")
    }
    const userProfile = await this.prismaService.profile.create({
      data: {
        user_Id: user.id,
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

    return { profile: userProfile }
  }
}
