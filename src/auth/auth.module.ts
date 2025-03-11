import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/config/prisma-config';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './constants/constant';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth-guard';

@Module({
  imports: [JwtModule.register({
    global: true,
    secret: jwtConstant.secret,
    signOptions: {
      algorithm: 'HS256',
      expiresIn: '86400s'
    }
  })],
  providers: [AuthService, PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
  controllers: [AuthController]
})
export class AuthModule { }
