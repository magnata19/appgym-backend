/*
  Warnings:

  - You are about to drop the column `treinosId` on the `Treinadores` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Treinadores_treinosId_key";

-- AlterTable
ALTER TABLE "Treinadores" DROP COLUMN "treinosId";
