import prisma from '@/config/prisma';
import { CreateInput, DeleteInput, FindInput, UpdateInput } from '@/types/user.types';

export const getAllService = async () => {
  return await prisma.user.findMany();
};

export const getOneService = async ({ id }: FindInput) => {
  return await prisma.user.findFirst({ where: { id: id } });
};

export const createService = async (payload: CreateInput) => {
  return await prisma.user.create({
    data: payload,
  });
};

export const updateService = async (payload: UpdateInput) => {
  return await prisma.user.update({
    where: { id: payload.id },
    data: payload,
  });
};

export const deleteService = async (payload: DeleteInput) => {
  return await prisma.user.delete({
    where: { id: payload.id },
  });
};
