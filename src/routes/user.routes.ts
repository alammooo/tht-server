import express from 'express';

import {
  createController,
  deleteController,
  getAllController,
  getOneController,
  updateController,
} from '@/controllers/user.controllers';

const userRouter = express.Router();

userRouter.get('', getAllController);
userRouter.get('/:userId', getOneController);
userRouter.post('/', createController);
userRouter.patch('/:userId', updateController);
userRouter.delete('/:userId', deleteController);

export default userRouter;
