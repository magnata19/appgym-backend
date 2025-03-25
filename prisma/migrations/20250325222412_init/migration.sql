/*
  Warnings:

  - You are about to drop the `Enderecos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Treinos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Enderecos" DROP CONSTRAINT "Enderecos_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_user_Id_fkey";

-- DropForeignKey
ALTER TABLE "Treinos" DROP CONSTRAINT "Treinos_treino_id_fkey";

-- DropTable
DROP TABLE "Enderecos";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "Treinos";

-- CreateTable
CREATE TABLE "profiles" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "salario" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "treinos" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "tipoTreino" TEXT NOT NULL,
    "descricaoTreino" TEXT NOT NULL,
    "quantidadeSeries" TEXT NOT NULL,
    "quantidadeRepeticoes" TEXT NOT NULL,
    "diaDaSemana" TEXT NOT NULL,

    CONSTRAINT "treinos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enderecos" (
    "id" SERIAL NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "profileId" INTEGER,

    CONSTRAINT "enderecos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_cpf_key" ON "profiles"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_key" ON "profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "treinos_userId_key" ON "treinos"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "treinos_tipoTreino_key" ON "treinos"("tipoTreino");

-- CreateIndex
CREATE UNIQUE INDEX "enderecos_profileId_key" ON "enderecos"("profileId");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treinos" ADD CONSTRAINT "treinos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enderecos" ADD CONSTRAINT "enderecos_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
