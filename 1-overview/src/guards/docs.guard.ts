import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

/**
 * Guard determines
 * - whether a given request will be handled by the route handler or not, depending on certain condition
 * - can be set using @UseGuard(AuthGuard) for routes or Module Provider for module scope
 */

@Injectable()
export class DocsGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const { readable } = req.headers;

    return readable === 'allow';
  }
}
