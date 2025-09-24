const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create some users
  const user1 = await prisma.user.create({
    data: { name: 'Alice Example', email: 'alice@example.com' }
  });

  const user2 = await prisma.user.create({
    data: { name: 'Bob Example', email: 'bob@example.com' }
  });

  // Create a product
  const product = await prisma.product.create({
    data: {
      name: 'Nintendo Switch',
      category: 'Electronics',
      userId: user1.id, // links to Alice
    }
  });

  // Add price data for the product
  await prisma.priceData.create({
    data: {
      productId: product.id,
      marketplace: 'eBay',
      price: 250.00,
    }
  });

  // Add watchlist item
  await prisma.watchlist.create({
    data: {
      userId: user2.id,
      productId: product.id,
    }
  });

  console.log('✅ Seed data inserted successfully!');
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
