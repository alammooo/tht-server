import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import 'dotenv/config';
import express, { Express } from 'express';
import http from 'http';

import errorHandler from '@/middleware/error-handler';
import router from '@/routes/index';

dotenv.config();
const PORT = process.env.PORT || 3001;

const app: Express = express();
const server = http.createServer(app);

app.use(
  cors({
    credentials: true,
    origin: process.env.FE_ORIGIN?.split(','),
  }),
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: false }));

app.use('/be-api', router);

app.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
  console.log(`Server date: ${new Date()}`);
});
