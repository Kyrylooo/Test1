const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://23agki:TmRqcdQpNqoq5LTX@cluster0.bccvqe2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    
    await collection.insertOne({"test key": "test value"});
    console.log("You successfully connected to MongoDB!");
}

async function get_test_query() {
  docment = await collection.find()
  console.log(docment)

}

run().catch(console.dir);

get_test_query().catch(console.dir);

