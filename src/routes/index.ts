import express from 'express';

import authentication from '@/middleware/authentication';

import authRouter from './auth.routes';
import gradeRouter from './grade.routes';
import patientRouter from './patient.routes';
import recordRouter from './record.routes';
import ulcerImageRouter from './ulcer-image.routes';
import ulcerRouter from './ulcer.routes';
import userRouter from './user.routes';

const router = express.Router();

router.use('/auth', authRouter);
// router.use(authentication);
router.use('/user', userRouter);
router.use('/assets', express.static('assets'));
router.use('/patient', patientRouter);
router.use('/record', recordRouter);
router.use('/ulcer', ulcerRouter);
router.use('/grades', gradeRouter);
router.use('/ulcer-image', ulcerImageRouter);

export default router;
