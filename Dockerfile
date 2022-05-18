FROM node:16-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile --production

COPY ./build/ ./

EXPOSE 3000

CMD ["node", "index.js"]