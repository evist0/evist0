FROM node:lts-alpine AS build

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

FROM node:lts-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app/dist ./dist

RUN npm i -g serve
CMD ["serve", "-l", "3000", "dist"]