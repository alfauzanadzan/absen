import { Controller, Get, Post, Body, Query, ParseIntPipe } from '@nestjs/common';
import { AbsensiService } from './absensi.service';
import { CreateAbsensiDto } from './dto/create-absensi.dto';

@Controller('absensi')
export class AbsensiController {
  constructor(private readonly absensiService: AbsensiService) {}

  @Post()
  create(@Body() dto: CreateAbsensiDto) {
    return this.absensiService.create(dto);
  }

  @Get()
  findAll(
    @Query('date') date?: string,
    @Query('userId') userId?: string,
  ) {
    return this.absensiService.findAll(date, userId ? parseInt(userId, 10) : undefined);
  }
}
