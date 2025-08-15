import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AbsensiModule } from './absensi/absensi.module';

@Module({
  imports: [PrismaModule, UsersModule, AbsensiModule],
})
export class AppModule {}
