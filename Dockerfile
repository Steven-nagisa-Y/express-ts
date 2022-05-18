FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig.json ./

RUN npm i
RUN npm run build

COPY ./build/ .

EXPOSE 3000

CMD ['node', 'index.js']