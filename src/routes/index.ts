import express from 'express';
import authentication from '@/middleware/authentication';

import authRouter from './auth.routes';
import categoryRouter from './category.routes';
import productRouter from './product.routes';
import userRouter from './user.routes';

const router = express.Router();

router.use('/auth', authRouter);
// router.use(authentication);
router.use('/user', userRouter);
router.use('/assets', express.static('assets'));
router.use('/product', productRouter);
router.use('/category', categoryRouter);

export default router;
