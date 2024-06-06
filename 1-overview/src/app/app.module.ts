import { Module } from '@nestjs/common';
import { UsersModule } from 'src/routes/users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
