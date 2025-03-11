/*
  Warnings:

  - The `perfil` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('ADMIN', 'TREINADOR', 'ALUNO');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profileId" INTEGER,
DROP COLUMN "perfil",
ADD COLUMN     "perfil" "UserRoles" NOT NULL DEFAULT 'ALUNO';

-- DropEnum
DROP TYPE "Perfil";

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "profile_id" INTEGER,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "salario" INTEGER,
    "endereco_id" INTEGER,
    "user_Id" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Treinos" (
    "id" SERIAL NOT NULL,
    "treino_id" INTEGER NOT NULL,
    "tipo_treino" TEXT NOT NULL,
    "descricao_treino" TEXT NOT NULL,
    "quantidade_series" TEXT NOT NULL,
    "quantidade_repeticoes" TEXT NOT NULL,
    "dia_da_semana" TEXT NOT NULL,

    CONSTRAINT "Treinos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enderecos" (
    "id" SERIAL NOT NULL,
    "endereco_id" INTEGER,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,

    CONSTRAINT "Enderecos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_profile_id_key" ON "Profile"("profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_cpf_key" ON "Profile"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_endereco_id_key" ON "Profile"("endereco_id");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_user_Id_key" ON "Profile"("user_Id");

-- CreateIndex
CREATE UNIQUE INDEX "Treinos_treino_id_key" ON "Treinos"("treino_id");

-- CreateIndex
CREATE UNIQUE INDEX "Treinos_tipo_treino_key" ON "Treinos"("tipo_treino");

-- CreateIndex
CREATE UNIQUE INDEX "Enderecos_endereco_id_key" ON "Enderecos"("endereco_id");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "Enderecos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Treinos" ADD CONSTRAINT "Treinos_treino_id_fkey" FOREIGN KEY ("treino_id") REFERENCES "Profile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;
