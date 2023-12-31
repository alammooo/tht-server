import { NextFunction, Request, Response } from 'express';
import { unlinkSync } from 'fs';
import { ValidationError } from 'yup';

import ErrorHandler from './errorHandler';

const errorHandler = (error: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  console.log({ error }, 'HALLO ERROR✅✅✅✅');
  if (req.file) unlinkSync(req.file.path);
  else if (Array.isArray(req.files)) {
    req.files.forEach((file) => {
      unlinkSync(file.path);
    });
  } else if (typeof req.files === 'object') {
    for (const key in req.files) {
      req.files[key].forEach((file) => {
        unlinkSync(file.path);
      });
    }
  }
  if (error instanceof ValidationError) error.statusCode = 400;
  res.status(error.statusCode || 500).json({ message: error.message || 'INTERNAL SERVER ERROR' });
  next();
};

export default errorHandler;
