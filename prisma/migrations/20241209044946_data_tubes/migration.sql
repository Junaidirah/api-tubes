-- CreateTable
CREATE TABLE "datas" (
    "id" SERIAL NOT NULL,
    "temperature" TEXT,
    "humidity" TEXT,
    "nh3" TEXT,

    CONSTRAINT "datas_pkey" PRIMARY KEY ("id")
);
