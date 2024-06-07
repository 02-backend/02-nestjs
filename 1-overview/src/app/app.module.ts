import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersModule } from 'src/routes/users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { LogMiddleware } from 'src/middlewares/log.middleware';

@Module({
  imports: [PrismaModule, UsersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    /**
     * or using forRoutes('*') for global scope
     * or using forRoutes(UsersController) for users module scope
     * (use exclude in case of some paths)
     */
    consumer.apply(LogMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.GET,
    });
  }
}
