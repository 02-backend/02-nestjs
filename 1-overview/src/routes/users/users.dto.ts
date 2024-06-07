import { PartialType, PickType } from '@nestjs/mapped-types';
import { UserModel } from './user.model';

export class CreateUserDto extends PickType(UserModel, [
  'name',
  'email',
  'role',
] as const) {}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
