import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 250,
          name: "Curso de NodeJS",
          description: "Curso Completo de NodeJS"
        }
      },
      module: {
        create: {
          description: "Curso Completo de PrismaIO",
          name: "Prisma IO"
        }
      }
    }
  });

  console.log(result);
};

main();
