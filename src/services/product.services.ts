import { title } from 'process';

import prisma from '@/config/prisma';
import {
  CreateInput,
  DeleteInput,
  FindInput,
  Pagination,
  UpdateInput,
} from '@/types/product.types';

export const getAllService = async (params: FindInput & Pagination) => {
  console.log(params, 'HALLO PARAMS SERVER✅✅✅✅');
  if (params.name || params.categoryId) {
    return await prisma.product.findMany({
      skip: params.offset,
      take: 10,
      where: {
        OR: [
          {
            name: {
              startsWith: params.name,
            },
          },
          {
            categoryId: params.categoryId,
          },
        ],
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
  } else {
    return await prisma.product.findMany({
      skip: params.offset,
      take: 10,
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
  }
};

export const getOneService = async ({ id }: FindInput) => {
  return await prisma.product.findFirst({ where: { id: id } });
};

export const createService = async ({ file, payload }: CreateInput) => {
  return await prisma.product.create({
    data: {
      image: file?.path,
      ...payload,
    },
  });
};

export const updateService = async (payload: UpdateInput) => {
  return await prisma.product.update({
    where: { id: payload.id },
    data: payload,
  });
};

export const deleteService = async (payload: DeleteInput) => {
  return await prisma.product.delete({
    where: { id: payload.id },
  });
};
