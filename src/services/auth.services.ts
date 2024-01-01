import jwt from 'jsonwebtoken';

import prisma from '@/config/prisma';
import { CreateInput, GenerateInput, User } from '@/types/user.types';

export const getUserByUsername = async (email: string) => {
  const result = await prisma.user.findFirst({ where: { email: email } });
  return result;
};

export const generateAccessToken = (payload: GenerateInput) => {
  return jwt.sign({ userId: payload.userId }, process.env.JWT_SECRET);
};

export const createUser = async (payload: CreateInput) => {
  return await prisma.user.create({ data: payload });
};
