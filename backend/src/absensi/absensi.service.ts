import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAbsensiDto } from './dto/create-absensi.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class AbsensiService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateAbsensiDto) {
    return this.prisma.absensi.create({ data });
  }

  findAll(date?: string, userId?: number) {
    const where: Prisma.AbsensiWhereInput = {};

    if (date) {
      const start = new Date(date);
      const end = new Date(date);
      end.setHours(23, 59, 59, 999);
      where.tanggal = { gte: start, lte: end };
    }
    if (userId) where.userId = userId;

    return this.prisma.absensi.findMany({
      where,
      include: { user: { select: { id: true, name: true, email: true } } },
      orderBy: { id: 'desc' },
    });
  }
}
