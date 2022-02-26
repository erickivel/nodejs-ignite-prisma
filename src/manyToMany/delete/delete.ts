import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "d88ded5a-37f4-4622-b5af-2f7dc92250ab"
    }
  });

  console.log(result);
};

main();