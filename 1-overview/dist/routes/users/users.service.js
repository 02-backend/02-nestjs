"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../app/prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getAll() {
        return this.prisma.user.findMany();
    }
    async getAllTeachers() {
        return this.prisma.user.findMany({
            where: {
                role: 'teacher',
            },
        });
    }
    async getAllByRole(role) {
        const targetUsers = await this.prisma.user.findMany({
            where: {
                role,
            },
        });
        if (targetUsers.length === 0) {
            throw new common_1.NotFoundException(`Users not found with the role ${role}`);
        }
        return targetUsers;
    }
    async getById(id) {
        const targetUser = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!targetUser) {
            throw new common_1.NotFoundException('User not found');
        }
        return targetUser;
    }
    create(newUser) {
        return this.prisma.user.create({
            data: newUser,
        });
    }
    async updateById(id, updatedUser) {
        const targetUser = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!targetUser) {
            throw new common_1.NotFoundException('User not found');
        }
        return this.prisma.user.update({
            where: { id },
            data: updatedUser,
        });
    }
    async deleteById(id) {
        const targetUser = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!targetUser) {
            throw new common_1.NotFoundException('User not found');
        }
        return this.prisma.user.delete({
            where: { id },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map