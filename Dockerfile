FROM node:20-alpine

WORKDIR /app

COPY . .

ENV NODE_ENV=production

RUN yarn install --production=true

RUN yarn global add prisma

CMD npx prisma migrate deploy && npm start
