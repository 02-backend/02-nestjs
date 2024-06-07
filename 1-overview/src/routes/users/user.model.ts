import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export type UserRole = 'admin' | 'teacher' | 'student';

export class UserModel {
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['admin', 'teacher', 'student'], {
    message: '',
  })
  role: UserRole;
}
