FROM mongo:3.2.6

LABEL Raúl López
LABEL version="1.0"

WORKDIR /mongodb-import

COPY db.sh /mongodb-import
COPY data.json /mongodb-import

RUN chmod +x ./db.sh

RUN ./db.sh
