import express from 'express';

import {
  createController,
  deleteController,
  getAllController,
  getOneController,
  updateController,
} from '@/controllers/product.controllers';
import multerUpload from '@/utils/multerUpload';

const productRouter = express.Router();

productRouter.get('', getAllController);
productRouter.get('/:productId', getOneController);
productRouter.post('/', multerUpload.single('file'), createController);
productRouter.patch('/:productId', updateController);
productRouter.delete('/:productId', deleteController);

export default productRouter;
