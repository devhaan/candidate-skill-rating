import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string) {
    const user = await this.usersService.findOne(username);
    const match = await bcrypt.compare(pass, user.password);
    if (!user || !match) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
