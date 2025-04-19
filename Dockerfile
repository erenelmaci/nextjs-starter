FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN chmod -R 777 .

RUN npm run build 

EXPOSE 3000

CMD ["npm", "start"]