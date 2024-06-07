import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

/**
 * Middleware is
 * - A function which is called before the route handler
 * - Have access to the request and response objects
 */

export class LogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware run...');
    next();
  }
}
