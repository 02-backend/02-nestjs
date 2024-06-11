import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { ResModifyInterceptor } from 'src/interceptors/res-modify.interceptor';

@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Get('docs')
  @UseInterceptors(ResModifyInterceptor)
  getDocs() {
    return this.resourcesService.getDocs();
  }
}
