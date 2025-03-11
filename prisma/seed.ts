// /* eslint-disable prettier/prettier */
// import { PrismaClient } from "@prisma/client";
// import { create } from "domain";

// const prisma = new PrismaClient();

// const main = async () => {

//   const userAdmin = await prisma.user.upsert({
//     where: { username: "admin" },
//     update: {},
//     create: {
//       username: "admin",
//       senha: "123456",
//       perfil: "ADMIN"
//     }
//   })

//   const userTreinador = await prisma.treinadores.upsert({
//     where: { cpf_treinador: "12312312399" },
//     update: {},
//     create: {
//       nome_treinador: "Rafaela",
//       cpf_treinador: "12312312399",
//       data_nascimento: "02/02/02",
//       endereco_treinador: {
//         create: {
//           estado: "São Paulo",
//           cidade: "Vila Velha",
//           bairro: "Vila nova",
//           rua: "Rua dos Bobos",
//           numero: 0
//         }
//       },
//       perfil: "TREINADOR",
//       salario_treinador: 1800,
//       treinos: {
//       }
//     }
//   })

//   const userClient = await prisma.clientes.upsert({
//     where: { cpf_cliente: "12312312399" },
//     update: {},
//     create: {
//       nome: "Camila",
//       sobrenome: "Oliveira",
//       cpf_cliente: "12312312399",
//       data_nascimento: "02/02/2000",
//       numero_telefone: "12998899009",
//       endereco_cliente: {
//         create: {
//           estado: "São Paulo",
//           cidade: "Vila Velha",
//           bairro: "Vila nova",
//           rua: "Rua dos Bobos",
//           numero: 0
//         }
//       },
//       perfil: "CLIENTE",
//       treinos: {}
//     }
//   })

//   const treino = await prisma.treinos.upsert({
//     where: { tipo_treino: "peito" },
//     update: {},
//     create: {
//       tipo_treino: "peito",
//       descricao_treino: "supino reto",
//       quantidade_series: "3",
//       quantidade_repeticoes: "15",
//       dia_da_semana: "Segunda-Feira",
//       client_id: { connect: { id: userClient.id } },
//       treinador_id: { connect: { id: userTreinador.id } }
//     }
//   })

//   console.log({ userAdmin, userTreinador, userClient, treino })
// }

// main()
//   .catch((err) => {
//     console.error(err, ' deu ruim')
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect;
//   })