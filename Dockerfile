FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN cp .env.example .env

EXPOSE 3000

CMD ["npm", "start"]