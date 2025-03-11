import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma-config';
import { ICreateUserLogin } from './interface/user-interface';
import { User, UserRoles } from '@prisma/client';
import { ICreateProfileDto } from './interface/profile-dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }

  async createUser(adminDto: ICreateUserLogin): Promise<any> {
    const userAdmin = await this.prismaService.user.create({
      data: {
        username: adminDto.username,
        senha: adminDto.senha,
        perfil: UserRoles.ADMIN,
      }
    })
    return { admin: userAdmin }
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
