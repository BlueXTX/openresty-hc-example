FROM node:21-alpine

WORKDIR /app

ADD ./ /app

RUN npm install

EXPOSE 80

CMD ["node", "main.js"]