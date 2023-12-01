import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const p1 = await prisma.product.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Product Management Tool",
      price: 99.99,
    },
  });
  const p2 = await prisma.product.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Inventory Management Tool",
      price: 149.99,
    },
  });
  const p3 = await prisma.product.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: "Hospital Management Tool",
      price: 199.99,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
