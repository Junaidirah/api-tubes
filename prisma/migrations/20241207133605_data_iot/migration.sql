/*
  Warnings:

  - You are about to drop the `Data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Data";

-- CreateTable
CREATE TABLE "datas" (
    "id" SERIAL NOT NULL,
    "temp" TEXT,
    "humidity" TEXT,
    "nh3" TEXT,

    CONSTRAINT "datas_pkey" PRIMARY KEY ("id")
);
