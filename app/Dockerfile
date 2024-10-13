ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine
WORKDIR /app
COPY package.json .
RUN npm install

COPY . .
CMD node app.js
