import express from 'express';

import { login } from '@/controllers/auth.controllers';
import { createController } from '@/controllers/user.controllers';
import adminOnly from '@/middleware/adminOnly';
import authentication from '@/middleware/authentication';

const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/register', authentication, createController);

export default authRouter;
