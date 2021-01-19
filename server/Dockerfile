FROM node:12.9.0

WORKDIR /var/node/server

COPY . /var/node/server

ENV API_PORT=3000 API_HOST=localhost

RUN npm install

CMD ["npm", "start"]
