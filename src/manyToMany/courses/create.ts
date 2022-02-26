import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "ReactJS",
      duration: 200,
      description: "Curso de React"
    }
  });

  console.log(result);
};

main();
