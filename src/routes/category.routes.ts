import express from 'express';

import {
  createController,
  deleteController,
  getAllController,
  getOneController,
  updateController,
} from '@/controllers/category.controllers';

const categoryRouter = express.Router();

categoryRouter.get('', getAllController);
categoryRouter.get('/:categoryId', getOneController);
categoryRouter.post('/', createController);
categoryRouter.patch('/:categoryId', updateController);
categoryRouter.delete('/:categoryId', deleteController);

export default categoryRouter;
