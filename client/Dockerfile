FROM node:12.9.1

LABEL Raúl López
LABEL version="1.0"

WORKDIR /var/node/client

COPY . /var/node/client

ENV PORT=8080

RUN npm install && npm run build

CMD ["npm", "start"]
