import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'alam@gmail.com' },
    update: {},
    create: {
      fullName: 'Abdullah Alam',
      position: 'Web Programmer',
      email: 'alam@gmail.com',
      password: '$2a$10$cw/Oi05SpxHCi2hy8P4OjOlKzynsWOh5tRhBetKhdz.gteILxWHSa',
    },
  });
  console.log({ admin });
  const sport = await prisma.category.upsert({
    where: { name: 'olahraga' },
    update: {},
    create: {
      name: 'olahraga',
    },
  });
  console.log({ sport });
  const music = await prisma.category.upsert({
    where: { name: 'alat musik' },
    update: {},
    create: {
      name: 'alat musik',
    },
  });
  console.log({ music });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
