FROM node:22-alpine3.19 AS base

FROM base
WORKDIR /app
COPY . .

RUN npm i -g serve

CMD [ "serve", "-s", "-l", "8080" ]