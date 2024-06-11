import { Module } from '@nestjs/common';
import { ResourcesController } from './resources.controller';
import { ResourcesService } from './resources.service';
import { DocsGuard } from 'src/guards/docs.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [ResourcesController],
  providers: [
    ResourcesService,
    {
      provide: APP_GUARD,
      useClass: DocsGuard,
    },
  ],
})
export class ResourcesModule {}
