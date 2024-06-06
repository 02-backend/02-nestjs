import { UserModel } from 'src/models/user.model';
declare const CreateUserDto_base: import("@nestjs/mapped-types").MappedType<Pick<UserModel, "name" | "email" | "role">>;
export declare class CreateUserDto extends CreateUserDto_base {
}
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
