import { compareSync, hashSync } from 'bcrypt';

import ErrorHandler from '@/middleware/error-handler/errorHandler';
import { createUser, generateAccessToken, getUserByUsername } from '@/services/auth.services';
import { ExpressFc } from '@/types';
import { loginValidator } from '@/validators/auth.validators';

export const login: ExpressFc = async (req, res, next) => {
  try {
    const { body } = await loginValidator.validate(req);
    const user = await getUserByUsername(body.email);
    if (!user) throw new ErrorHandler(401, 'Incorrect password / email');
    const isValidPassword = compareSync(body.password, user.password);
    if (!isValidPassword) throw new ErrorHandler(401, 'Incorrect password / email');
    const accessToken = generateAccessToken({ userId: user.id });
    res.status(200).json({ message: 'login successfull', accessToken, user });
  } catch (error) {
    next(error);
  }
};
