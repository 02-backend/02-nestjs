import { Module } from '@nestjs/common';
import { ResourcesController } from './resources.controller';
import { APP_GUARD } from '@nestjs/core';
import { DocsGuard } from 'src/guards/docs.guard';

@Module({
  controllers: [ResourcesController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: DocsGuard,
    },
  ],
})
export class ResourcesModule {}
