import * as MongoClient from 'mongodb';

export default class Mongo {
  static databaseUrl: string;
  static databaseName: string;
  static databaseCollection: string;
  static databaseInstance: any;

  static async initialize (databaseUrl: string, databaseName: string, databaseCollection: string) {
    console.log('Init mongodb constructor...');
    Mongo.databaseUrl = databaseUrl;
    Mongo.databaseName = databaseName;
    Mongo.databaseCollection = databaseCollection;
    Mongo.databaseInstance = await MongoClient.connect(Mongo.databaseUrl, {
      useUnifiedTopology: true
    });
  }

  static async getCollection () {
    const dbObject = await this.databaseInstance.db(this.databaseName);
    const dbCollection = await dbObject.collection(this.databaseCollection);
    console.log(`[MongoDB connection] ==> ${this.databaseCollection} ==> SUCCESS`);
    return dbCollection;
  }

  static async getDatabaseName () {
    return Mongo.databaseName;
  }

}
