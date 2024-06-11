import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

/**
 * Do some logic before
 * - a request
 * - a response (remove password in the response payload)
 */

@Injectable()
export class ResModifyInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(context.getClass().name);
    console.log(context.getHandler().name);
    return next.handle().pipe(map((data) => `Modified: ${data}`));
  }
}
