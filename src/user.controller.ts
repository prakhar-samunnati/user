import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './user.entity';
import { UpdateUserDto } from './user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'create' })
  createUser(data: CreateUserDto) {
    return this.userService.create(data);
  }

  @MessagePattern({ cmd: 'findAll' })
  findAllUsers() {
    return this.userService.findAll();
  }

  @MessagePattern({ cmd: 'findOne' })
  findOneUser(id: number) {
    return this.userService.findOne(id);
  }

  @MessagePattern({ cmd: 'update' })
  updateUser(data: { id: number; updateUserDto: UpdateUserDto }) {
    return this.userService.update(data.id, data.updateUserDto);
  }

  @MessagePattern({ cmd: 'remove' })
  removeUser(id: number) {
    return this.userService.remove(id);
  }
}
