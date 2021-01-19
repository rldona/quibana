#! /bin/bash

# TODO: crear un wget para descargar el fichero de un buckect siempre actualizado (mongo atlas, S3, Google Drive...)

# sleep 30

chmod +x /mongodb/import.sh &&

sleep 30

mongoimport --host mongodb --db filmaffinity-db --collection reviews-es --type json --file /mongodb/data.json --jsonArray
