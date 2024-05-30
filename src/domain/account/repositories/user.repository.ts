import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/prisma/prisma.service';
import { CreateUserDto } from '../../../application/account/dtos/create-user.dto';
import { UpdateUserDto } from '../../../application/account/dtos/update-user.dto';
import { User } from '../models/user.model';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.users.findMany({
        include: {
            type_user: true,
        },
    });
  }

  async findOne(id: number): Promise<User> {
    return this.prisma.users.findUnique({
      where: { id },
      include: {
        type_user: true,
    },
    });
  }

  async create(data: CreateUserDto): Promise<User> {
    return this.prisma.users.create({
      data: {
        first_name: data.first_name,
        last_name: data.last_name,
        photo: data.photo || null,
        email: data.email,
        password: data.password,
        type_user_id: data.type_user_id, // Asegurarse de incluir el type_user_id
      },
      include: {
        type_user: true, // Incluir la relación type_user
      },
    });
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    return this.prisma.users.update({
      where: { id },
      data,
      include: {
        type_user: true,
    },
    });
  }

  async remove(id: number): Promise<User> {
    return this.prisma.users.delete({
      where: { id },
      include: {
        type_user: true,
    },
    });
  }
}
