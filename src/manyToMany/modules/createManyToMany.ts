import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "9c21419d-f082-4f85-917e-818a523f2b33",
      fk_id_module: "d6038611-1857-4dfe-a6cd-222e9fda571a"
    }
  });

  console.log(result);
};

main();
