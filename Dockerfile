FROM node:14.16.0

WORKDIR /usr/src/app

COPY package*.json ./

ENV DATABASE_URL "mongodb://mongo:27017/looselyhub"

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]