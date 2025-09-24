require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

async function main() {
  const prisma = new PrismaClient();
  try {
    const users = await prisma.user.findMany();
    console.log('Users in DB:', users);
  } finally {
    await prisma.$disconnect(); // ensure connection is closed
  }
}

main().catch(e => console.error(e));