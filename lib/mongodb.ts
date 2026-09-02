import { MongoClient } from "mongodb";
const uri=process.env.MONGODB_URI;
if(!uri) throw new Error("MONGODB_URI is not configured");
const globalWithMongo=global as typeof globalThis&{_mongoClient?:Promise<MongoClient>};
export const clientPromise=globalWithMongo._mongoClient??new MongoClient(uri).connect();
if(process.env.NODE_ENV!=="production") globalWithMongo._mongoClient=clientPromise;
export async function db(){return (await clientPromise).db(process.env.MONGODB_DB||"embellish_design")}
