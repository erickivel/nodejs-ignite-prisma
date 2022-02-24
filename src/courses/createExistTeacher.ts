import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Swift",
      duration: 500,
      description: "Curso de Swift",
      teacher: {
        connect: {
          name: "Daniele Leão",
        },
      },
    },
  });

  console.log(result);
}

main();
