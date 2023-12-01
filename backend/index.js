import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

import cron from "node-cron";


const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/api/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

app.post("/api/products/star", async (req, res) => {
  const { productId, name, email } = req.body;
  let user = await prisma.user.findUnique({
    where: { email },
  });

  // If the user does not exist, create a new one
  if (!user) {
    user = await prisma.user.create({
      data: { name, email },
    });
  }

  // Connect the product to the user
  await prisma.product.update({
    where: { id: productId },
    data: {
      starredByUsers: {
        connect: { id: user.id },
      },
    },
  });

  res.json({ message: "Product starred successfully", user });
});

// Endpoint to get starred products and user info
app.get("/api/starred-products", async (req, res) => {
  const starredProducts = await prisma.user.findMany({
    include: {
      starredProducts: true,
    },
  });
  res.json(starredProducts);
});


// Schedulling task to run every 24 hours
cron.schedule("0 0 * * *", async () => {
  const allProducts = await prisma.product.findMany();
  const updatePromises = allProducts.map((product) => {
    const newPrice = parseFloat((Math.random() * 100).toFixed(2));
    return prisma.product.update({
      where: { id: product.id },
      data: { price: newPrice },
    });
  });

  await Promise.all(updatePromises);
  console.log("Product prices updated!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
