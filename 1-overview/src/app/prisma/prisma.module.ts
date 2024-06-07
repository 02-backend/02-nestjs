import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * Prisma module is set to global by using @Global(), which only needs to register one place (app module)
 */

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // is considered as a shared module
})
export class PrismaModule {}
