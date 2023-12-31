import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import prisma from '@/config/prisma';
import { UserType } from '@/enums/UserType';

import ErrorHandler from './error-handler/errorHandler';

declare module 'express-serve-static-core' {
  interface Request {
    user: {
      id: number;
      userType?: UserType;
      username: string;
      phoneNumber?: string | null;
      fullName: string | null;
      email: string | null;
      profilePicture: string | null;
    };
  }
}

const authentication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new ErrorHandler(401, 'Require access token');
    const accessToken = authorization.split(' ')[1];
    const { userId } = jwt.verify(accessToken, process.env.JWT_SECRET) as { userId: number };
    const user = await prisma.user.findFirstOrThrow({
      where: { id: userId },
    });
    req.user = {
      id: user.id,
      // userType: user.userType,
      username: user.username,
      phoneNumber: user.phoneNumber,
      fullName: user.fullName,
      email: user.email,
      profilePicture: user.profilePicture,
    };
    next();
  } catch (error) {
    next(error);
  }
};

export default authentication;
