import * as MongoClient from 'mongodb';

import Mongo from '../config/mongo';

const databaseUrl = 'mongodb+srv://rldona:NTkXp5z9nPGkquv2@filmaffinity-db-cluster.qdjua.mongodb.net/filmaffinity-db?retryWrites=true&w=majority';
const databaseName = 'filmaffinity-db';
const databaseCollection = 'reviews-es';

const connectDB = async () => {
  Mongo.initialize(databaseUrl, databaseName, databaseCollection);
};

export default connectDB;
