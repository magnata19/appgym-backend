import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Public } from './constants/constant';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post()
  @Public()
  async signIn(@Body() authDto: AuthDto): Promise<{ access_token: string }> {
    return this.authService.signIn(authDto.username, authDto.password);
  }

}
