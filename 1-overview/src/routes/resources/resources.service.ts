import { Injectable } from '@nestjs/common';

@Injectable()
export class ResourcesService {
  getDocs() {
    return ['This is a secret docs'];
  }
}
