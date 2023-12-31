-- CreateTable
CREATE TABLE "AssetPrice" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "exchange" VARCHAR(255) NOT NULL,
    "symbol" VARCHAR(255) NOT NULL,
    "eventTime" TEXT NOT NULL,
    "averagePrice" DOUBLE PRECISION NOT NULL,
    "lastPrice" DOUBLE PRECISION,
    "lastQuantity" DOUBLE PRECISION,
    "baseVolume" DOUBLE PRECISION,
    "quoteVolume" DOUBLE PRECISION,

    CONSTRAINT "AssetPrice_pkey" PRIMARY KEY ("id")
);
