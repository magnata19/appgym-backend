import { Body, Controller, Post } from '@nestjs/common';
import { TreinoService } from './treino.service';
import { ITreinoDto } from './interface/treino-dto';

@Controller('treino')
export class TreinoController {

  constructor(private treinoService: TreinoService) { }

  @Post('criar')
  async criarTreino(@Body() treinoDto: ITreinoDto): Promise<any> {
    return this.treinoService.criarTreino(treinoDto)
  }
}
