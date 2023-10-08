FROM node:14-alpine
WORKDIR /place-order-async-sqs-consumer
COPY package.json .
COPY .npmrc .
RUN npm install 
COPY . . 
RUN npm run build:development
CMD npm run start:development
