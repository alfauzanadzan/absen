-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('ADMIN', 'PETUGAS');

-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('HADIR', 'TERLAMBAT', 'IZIN', 'SAKIT', 'ALPA');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'PETUGAS',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Absensi" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "public"."Status" NOT NULL DEFAULT 'HADIR',
    "lokasi" TEXT,
    "deviceId" TEXT,
    "note" TEXT,

    CONSTRAINT "Absensi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "Absensi_userId_tanggal_idx" ON "public"."Absensi"("userId", "tanggal");

-- CreateIndex
CREATE INDEX "Absensi_tanggal_idx" ON "public"."Absensi"("tanggal");

-- AddForeignKey
ALTER TABLE "public"."Absensi" ADD CONSTRAINT "Absensi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
