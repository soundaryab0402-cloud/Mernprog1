import { MongoClient } from "mongodb";
import fs from "fs";

const url = "mongodb://localhost:27017";

const data = JSON.parse(fs.readFileSync("students.json"));

const client = new MongoClient(url);

await client.connect();

console.log("Connected successfully");

const db = client.db("studentdb");

const collection = db.collection("students");

const result = await collection.insertMany(data);

console.log(`Inserted ${result.insertedCount} documents`);

await client.close();