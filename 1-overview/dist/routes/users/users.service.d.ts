import { PrismaService } from 'src/app/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { UserRole } from './user.model';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getAllTeachers(): Promise<{
        id: number;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getAllByRole(role: UserRole): Promise<{
        id: number;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getById(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(newUser: CreateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateById(id: number, updatedUser: UpdateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteById(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
