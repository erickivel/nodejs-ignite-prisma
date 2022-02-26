import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: "Aprendendo Firbase do zero",
      name: "Aprendendo Firebase",
      CoursesModules: {
        create: {
          course: {
            connect: {
              id: "9c21419d-f082-4f85-917e-818a523f2b33"
            }
          }
        }
      }
    }
  });

  console.log(result);
};

main();
