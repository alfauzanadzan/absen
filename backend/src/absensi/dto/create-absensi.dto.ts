import { Status } from '@prisma/client';

export class CreateAbsensiDto {
  userId: number;
  status?: Status;     // HADIR | TERLAMBAT | IZIN | SAKIT | ALPA
  lokasi?: string;
  deviceId?: string;
  note?: string;
}
