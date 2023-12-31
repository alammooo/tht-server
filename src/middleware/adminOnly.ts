import { ExpressFc } from '@/types';

import ErrorHandler from './error-handler/errorHandler';

const adminOnly: ExpressFc = (req, res, next) => {
  try {
    if (!req.user.isAdmin) throw new ErrorHandler(403, 'Forbidden');
    next();
  } catch (error) {
    next(error);
  }
};

export default adminOnly;
