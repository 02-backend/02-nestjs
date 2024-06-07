import { Controller, Get } from '@nestjs/common';

@Controller('resources')
export class ResourcesController {
  @Get('docs')
  getDocs() {
    return 'This is a secret docs';
  }
}
