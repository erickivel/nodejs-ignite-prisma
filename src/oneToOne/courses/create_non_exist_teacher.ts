import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Elixir",
      duration: 500,
      description: "Curso de Java 17",
      teacher: {
        create: {
          name: "Rafa Camarda"
        }
      }
    }
  });

  console.log(result);
}

main();