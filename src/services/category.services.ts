import prisma from '@/config/prisma';
import { CreateInput, DeleteInput, FindInput, UpdateInput } from '@/types/category.types';

export const getAllService = async () => {
  return await prisma.category.findMany();
};

export const getOneService = async ({ id }: FindInput) => {
  return await prisma.category.findFirst({ where: { id: id } });
};

export const createService = async (payload: CreateInput) => {
  return await prisma.category.create({
    data: payload,
  });
};

export const updateService = async (payload: UpdateInput) => {
  return await prisma.category.update({
    where: { id: payload.id },
    data: payload,
  });
};

export const deleteService = async (payload: DeleteInput) => {
  return await prisma.category.delete({
    where: { id: payload.id },
  });
};
