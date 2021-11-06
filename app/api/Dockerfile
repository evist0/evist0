FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

ENV NODE_ENV=production

CMD ["node", "dist/main"]