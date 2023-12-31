import prisma from '@/config/prisma';
import { CreateInput, DeleteInput, FindInput, UpdateInput } from '@/types/product.types';

export const getAllService = async () => {
  return await prisma.product.findMany();
};

export const getOneService = async ({ id }: FindInput) => {
  return await prisma.product.findFirst({ where: { id: id } });
};

export const createService = async (payload: CreateInput) => {
  return await prisma.product.create({
    data: payload,
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
