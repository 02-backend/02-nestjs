export type UserRole = 'admin' | 'teacher' | 'student';
export declare class UserModel {
    id: number;
    name: string;
    email: string;
    role: UserRole;
}
