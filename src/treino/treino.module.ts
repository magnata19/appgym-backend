import { Module } from '@nestjs/common';
import { TreinoService } from './treino.service';
import { TreinoController } from './treino.controller';
import { PrismaService } from 'src/config/prisma-config';

@Module({
  providers: [TreinoService, PrismaService],
  controllers: [TreinoController]
})
export class TreinoModule { }
