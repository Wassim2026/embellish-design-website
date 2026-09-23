import { MongoClient } from "mongodb";

const globalWithMongo = global as typeof globalThis & {
  _mongoClient?: Promise<MongoClient>;
};

export async function db() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not configured");

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri).connect();
  }

  const client = await globalWithMongo._mongoClient;
  return client.db(process.env.MONGODB_DB || "embellish_design");
}
