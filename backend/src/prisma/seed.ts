import { PrismaClient, Role } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'admin@absen.local' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@absen.local',
      password: 'admin123', // NOTE: hash di produksi
      role: Role.ADMIN,
    },
  });

  await prisma.user.upsert({
    where: { email: 'petugas@absen.local' },
    update: {},
    create: {
      name: 'Petugas',
      email: 'petugas@absen.local',
      password: 'petugas123',
      role: Role.PETUGAS,
    },
  });
}

main().finally(async () => {
  await prisma.$disconnect();
});
