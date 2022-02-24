import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React.js",
      duration: 300,
      description: "Curso muito bom de React",
      fk_id_teacher: "0fac989e-085b-48cc-99f0-a123a9b9383a"
    }
  });

  console.log(result);
}

main();