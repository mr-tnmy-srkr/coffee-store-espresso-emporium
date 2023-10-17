const express = require("express");
const cors = require("cors");

require("dotenv").config();

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cqx0ng3.mongodb.net/?retryWrites=true&w=majority`;
// const uri = "mongodb://127.0.0.1:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //no.3
    // insert a document (https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/)
    // Connect to the "insertDB" database and access its "haiku" collection (Create)
    const database = client.db("coffeeDB");
    const coffeeCollection = database.collection("coffee");

    //M-56-5-3
    const userCollection = client.db("coffeeDB").collection("user");

    // no. 6 find multiple document (Read)
    // (https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/)
    app.get("/coffee", async (req, res) => {
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
      // then Home e loader()
    });

    // no. 10 akhon update korte hobe tai server e particular id r info pete hobe
    //http://localhost:5000/coffee/652b79ca88d41efc0de10e3d
    //,, find a document   (Update)
    // https://www.mongodb.com/docs/drivers/node/current/usage-examples/findOne/
    app.get("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.findOne(query);
      res.send(result);
      //then updateCoffee te loader()
    });

    // no.2 data received from client (Create)
    app.post("/coffee", async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);
      // no. 4 we will await here to insert a new coffee to mongodb (Create)
      const result = await coffeeCollection.insertOne(newCoffee);
      // no.5 sent these to client (Create)
      res.send(result);
    });

    //no. 12 after <updateCoffee/> we will do PUT operation here for update .. (UPDATE)
    // (update a document) https://www.mongodb.com/docs/drivers/node/current/usage-examples/updateOne/
    app.put("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      /* Set the upsert option to insert a document if no documents match
          the filter */
      const options = { upsert: true };
      const updatedCoffee = req.body;
      const coffee = {
        $set: {
          name: updatedCoffee.name,
          quantity: updatedCoffee.quantity,
          supplier: updatedCoffee.supplier,
          taste: updatedCoffee.taste,
          category: updatedCoffee.category,
          details: updatedCoffee.details,
          photo: updatedCoffee.photo,
        },
      };
      const result = await coffeeCollection.updateOne(filter, coffee, options);
      res.send(result);
    });

    // no. 8 Delete a document (Delete)
    // https://www.mongodb.com/docs/drivers/node/current/usage-examples/deleteOne/

    app.delete("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    });

    //M-56-5-3 user related apis
    //user related apis
    app.get("/user", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
      // then loader at <Users></Users>
    });

    app.post("/user", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Coffee making server is running");
});

app.listen(port, () => {
  console.log(`Coffee server is running on ${port}`);
});
