const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.fznkpfd.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const dbClient = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

const dbRun = async() => {
    try {
        // const manageUsersCollection = dbClient
        //     .db("GypsyTalesDB")
        //     .collection("Users");
        // Send a ping to confirm a successful connection
        await dbClient.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
            );
    } catch(error) {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }

}

module.exports = { dbRun, dbClient };