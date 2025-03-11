/*
  Warnings:

  - A unique constraint covering the columns `[profileId]` on the table `Enderecos` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_endereco_id_fkey";

-- AlterTable
ALTER TABLE "Enderecos" ADD COLUMN     "profileId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Enderecos_profileId_key" ON "Enderecos"("profileId");

-- AddForeignKey
ALTER TABLE "Enderecos" ADD CONSTRAINT "Enderecos_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
