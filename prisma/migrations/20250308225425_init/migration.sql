-- CreateEnum
CREATE TYPE "Perfil" AS ENUM ('ADMIN', 'TREINADOR', 'CLIENTE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "perfil" "Perfil" NOT NULL DEFAULT 'CLIENTE',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Treinadores" (
    "id" SERIAL NOT NULL,
    "perfil" "Perfil" NOT NULL DEFAULT 'TREINADOR',
    "nome_treinador" TEXT NOT NULL,
    "cpf_treinador" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "salario_treinador" INTEGER NOT NULL,
    "treinador_endereco_id" INTEGER NOT NULL,
    "treinosId" INTEGER NOT NULL,

    CONSTRAINT "Treinadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "id" SERIAL NOT NULL,
    "perfil" "Perfil" NOT NULL DEFAULT 'CLIENTE',
    "cliente_id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "cpf_cliente" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "numero_telefone" INTEGER NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
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
    "endereco_id" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,

    CONSTRAINT "Enderecos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Treinadores_cpf_treinador_key" ON "Treinadores"("cpf_treinador");

-- CreateIndex
CREATE UNIQUE INDEX "Treinadores_treinador_endereco_id_key" ON "Treinadores"("treinador_endereco_id");

-- CreateIndex
CREATE UNIQUE INDEX "Treinadores_treinosId_key" ON "Treinadores"("treinosId");

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_cliente_id_key" ON "Clientes"("cliente_id");

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_cpf_cliente_key" ON "Clientes"("cpf_cliente");

-- CreateIndex
CREATE UNIQUE INDEX "Treinos_treino_id_key" ON "Treinos"("treino_id");

-- CreateIndex
CREATE UNIQUE INDEX "Treinos_tipo_treino_key" ON "Treinos"("tipo_treino");

-- CreateIndex
CREATE UNIQUE INDEX "Enderecos_endereco_id_key" ON "Enderecos"("endereco_id");

-- AddForeignKey
ALTER TABLE "Treinadores" ADD CONSTRAINT "Treinadores_treinador_endereco_id_fkey" FOREIGN KEY ("treinador_endereco_id") REFERENCES "Enderecos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clientes" ADD CONSTRAINT "fk_client_id" FOREIGN KEY ("cliente_id") REFERENCES "Enderecos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Treinos" ADD CONSTRAINT "fk_treinador_id" FOREIGN KEY ("treino_id") REFERENCES "Treinadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Treinos" ADD CONSTRAINT "fk_client_id" FOREIGN KEY ("treino_id") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
