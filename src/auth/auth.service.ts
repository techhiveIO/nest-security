import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

/**
 * Taken directly from https://docs.nestjs.com/techniques/authentication
 */

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
