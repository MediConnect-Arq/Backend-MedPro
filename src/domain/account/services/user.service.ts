import { Injectable } from '@nestjs/common';
import * as bycript from 'bcrypt';
import { CreateUserDto } from '../../../application/account/dtos/create-user.dto';
import { UpdateUserDto } from '../../../application/account/dtos/update-user.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll() {
    return this.userRepository.findAll();
  }

  async findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bycript.hash(createUserDto.password, 10);
    createUserDto.password = hashedPassword;
    return this.userRepository.create(createUserDto);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bycript.hash(updateUserDto.password, 10);
    }
    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return this.userRepository.remove(id);
  }
}
