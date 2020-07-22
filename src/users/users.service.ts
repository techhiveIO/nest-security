import { Injectable } from '@nestjs/common';

export type User = any;

/**
 * Taken directly from https://docs.nestjs.com/techniques/authentication
 */
@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
        role: 'guest',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
        role: 'user',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
        role: 'moderator',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
