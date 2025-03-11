import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TreinoModule } from './treino/treino.module';

@Module({
  imports: [UsersModule, AuthModule, TreinoModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
