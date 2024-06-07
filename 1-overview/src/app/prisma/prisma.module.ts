import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * Prisma can be used inside specific modules by importing to a module (imports: [PrismaModule])
 * or used globally by apply @Global() decorator and register at one module (App module)
 */

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // is considered as a shared module
})
export class PrismaModule {}
