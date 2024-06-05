import { Injectable, Logger } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './user.entity';
import { UpdateUserDto } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 1;
  private readonly logger = new Logger(UserService.name);
  create(userDto: CreateUserDto): User {
    const user: User = { id: this.idCounter++, ...userDto };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto): User | undefined {
    const user = this.findOne(id);
    if (user) {
      Object.assign(user, updateUserDto);
    }
    return user;
  }

  remove(id: number): boolean {
    const index = this.users.findIndex((user) => user.id === id);
    this.logger.log(typeof index);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}
