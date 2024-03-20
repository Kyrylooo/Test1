const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://23agki:TmRqcdQpNqoq5LTX@cluster0.bccvqe2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const axios = require('axious');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const database = client.db("costomer");
const collection = database.collection("test1");
async function run() {
  try {
      await client.connect();
      console.log("Connected to MongoDB");

      await collection.insertOne({"test key": "test value"});
      console.log("Inserted document into the collection");

      // Closing the connection
      await client.close();
      console.log("MongoDB connection closed");
  } catch (error) {
      console.error("Error:", error);
  }
}

async function get_test_query() {
  try {
      // Отримання даних з API
      const response = await axios.get('https://data.mongodb-api.com/app/data-pyhcq/endpoint/data/v1');
      const apiData = response.data;

      // Збереження отриманих даних у колекції MongoDB
      await collection.insertMany(apiData);
      console.log("Data inserted into MongoDB");
  } catch (error) {
      console.error("Error:", error);
  }
}

run();
get_test_query('https://data.mongodb-api.com/app/data-pyhcq/endpoint/data/v1');