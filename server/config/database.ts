import * as MongoClient from 'mongodb';

const url = 'mongodb+srv://rldona:NTkXp5z9nPGkquv2@filmaffinity-db-cluster.qdjua.mongodb.net/filmaffinity-db?retryWrites=true&w=majority';
const dbName = 'filmaffinity-db';

const connectDB = async () => {
  try {
    MongoClient.connect(url, {
      useUnifiedTopology: true
    },(err: any, client: any) => {
      console.log("Connected successfully to server");
      const db = client.db(dbName);
      client.close();
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

};

export default connectDB;
