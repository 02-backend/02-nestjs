"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = exports.CreateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const user_model_1 = require("../../models/user.model");
class CreateUserDto extends (0, mapped_types_1.PickType)(user_model_1.UserModel, [
    'name',
    'email',
    'role',
]) {
}
exports.CreateUserDto = CreateUserDto;
class UpdateUserDto extends (0, mapped_types_1.PartialType)(CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=users.dto.js.map