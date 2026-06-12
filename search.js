import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

await client.connect();

const db = client.db("studentdb");

const collection = db.collection("students");

const partialName = "John";

const students = await collection.find({
    name: {
        $regex: partialName,
        $options: "i"
    }
}).toArray();

console.log(students);

await client.close();