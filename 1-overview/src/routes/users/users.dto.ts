import { PartialType, PickType } from '@nestjs/mapped-types';
import { UserModel } from 'src/models/user.model';

export class CreateUserDto extends PickType(UserModel, [
  'name',
  'email',
  'role',
] as const) {}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
