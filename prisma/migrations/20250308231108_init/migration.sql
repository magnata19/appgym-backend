-- DropForeignKey
ALTER TABLE "Treinadores" DROP CONSTRAINT "Treinadores_treinador_endereco_id_fkey";

-- AlterTable
ALTER TABLE "Treinadores" ALTER COLUMN "treinador_endereco_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Treinadores" ADD CONSTRAINT "Treinadores_treinador_endereco_id_fkey" FOREIGN KEY ("treinador_endereco_id") REFERENCES "Enderecos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
