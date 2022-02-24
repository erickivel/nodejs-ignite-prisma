import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura Limpa",
      author_id: "8a5413f4-9337-4c58-affa-3e747ae4a642"
    },
  });

  console.log(result);
};

main();