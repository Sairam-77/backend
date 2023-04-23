/*
  Warnings:

  - Added the required column `screen` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "screen" INTEGER NOT NULL,
ADD COLUMN     "showTime" TEXT[];
