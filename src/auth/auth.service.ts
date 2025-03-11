import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/config/prisma-config';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) { }

  async signIn(username: string, password: string): Promise<{ access_token: string }> {
    try {
      const existingUser = await this.prismaService.user.findFirst({ where: { username } });
      if (!existingUser) {
        throw new NotFoundException("Usuário não encontrado.")
      }
      if (existingUser?.senha !== password) {
        throw new UnauthorizedException("Senha inválida!")
      }

      const payload = { sub: existingUser.id, username: existingUser.username }

      return {
        access_token: await this.jwtService.signAsync(payload);
      }

    } catch {
      throw new BadRequestException("Deu ruim aqui")
    }
  }
}
