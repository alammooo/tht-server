import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'production' ? ['error'] : ['query', 'error', 'warn'],
});

// prisma.$use(async (params, next) => {
//   if (['findUnique', 'findFirst', 'findMany'].includes(params.action) && params.model !== 'User') {
//     if (!params.args) {
//       params.args = {};
//       params.args.where = {};
//     }
//     params.args.where['deletedAt'] = null;
//   }
//   return next(params);
// });

// prisma.$use(async (params, next) => {
//   if (params.action === 'delete') {
//     params.action = 'update';
//     params.args['data'] = { deletedAt: new Date() };
//   }
//   return next(params);
// });

export default prisma;
