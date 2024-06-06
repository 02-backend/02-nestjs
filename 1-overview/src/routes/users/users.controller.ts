import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { UserRole } from 'src/models/user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  /**
   * GET /users or /users?role=teacher
   */

  @Get()
  getAll(@Query('role') role?: UserRole) {
    return role
      ? this.userService.getAllByRole(role)
      : this.userService.getAll();
  }

  /**
   * GET /users/teachers
   */

  @Get('teachers')
  getAllTeachers() {
    return this.userService.getAllTeachers();
  }

  /**
   * GET /users/:id
   */

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getById(id);
  }

  /**
   * POST /users
   */

  @Post()
  create(@Body(ValidationPipe) newUser: CreateUserDto) {
    return this.userService.create(newUser);
  }

  /**
   * /users/:id
   */

  @Put(':id')
  updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updatedUser: UpdateUserDto,
  ) {
    return this.userService.updateById(id, updatedUser);
  }

  /**
   * /users/:id
   */

  @Delete(':id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteById(id);
  }
}
