import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "1bb90ab1-490e-4e5c-82b4-85fe6c8abe18"
    },
    data: {
      duration: 250,
      name: "React with Diego"
    }
  });

  console.log(result);
}

main();