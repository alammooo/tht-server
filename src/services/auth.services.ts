import jwt from 'jsonwebtoken';

import prisma from '@/config/prisma';
import { CreateInput, GenerateInput, UserSchema } from '@/types/user.types';

export const getUserByUsername = async (username: string) => {
  const result = await prisma.user.findFirst({ where: { username: username } });
  return result;
};

export const generateAccessToken = (payload: GenerateInput) => {
  return jwt.sign({ userId: payload.userId }, process.env.JWT_SECRET);
};

export const createUser = async (payload: CreateInput) => {
  return await prisma.user.create({ data: payload });
};
