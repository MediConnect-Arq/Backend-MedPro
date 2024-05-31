import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../../../domain/account/services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

 @Get(':id')
  async findOne(@Param('id') id: string) {
    const userId = parseInt(id, 10);
    return this.userService.findOne(userId);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) { // Cambia el tipo de id a string
    const userId = parseInt(id, 10); // Convertir el ID a un número entero
    return this.userService.update(userId, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) { // Cambia el tipo de id a string
    const userId = parseInt(id, 10); // Convertir el ID a un número entero
    return this.userService.remove(userId);
  }
}
