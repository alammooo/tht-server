import express from 'express';

import {
  createController,
  deleteController,
  getAllController,
  getOneController,
  updateController,
} from '@/controllers/product.controllers';

const productRouter = express.Router();

productRouter.get('', getAllController);
productRouter.get('/:productId', getOneController);
productRouter.post('/', createController);
productRouter.patch('/:productId', updateController);
productRouter.delete('/:productId', deleteController);

export default productRouter;
