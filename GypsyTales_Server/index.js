const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// const stripe = require("stripe")(process.env.PAYMENT_SECURITY_KEY);

const port = process.env.PORT || 5000;

const jwt = require("jsonwebtoken");
const { dbRun, dbClient } = require("./configs/dbConfig");
const { DBRef } = require("mongodb");
const verifyJWT = require("./middlewares/verifyJWT");

// middleware//
app.use(cors());
app.use(express.json());
//db connection
try {
    dbRun();
    const manageUsersCollection = dbClient
        .db("GypsyTalesDB")
        .collection("Users");

    //JWT Authentication
    app.post("/jwt", (req, res) => {
        const user = req.body;
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_JWT, {
            expiresIn: "1h",
        });
        res.send({ token });
    });

    app.post("/users", async (req, res) => {
        const user = req.body;

        const query = { email: user.email };

        // const existingUser = await manageUsersCollection.findOne(query);
        // if (existingUser) {
        //   return res.send({
        //     message: ` ${user.name} already exists in the GypsyTales database`,
        //   });
        // }

        const result = await manageUsersCollection.insertOne(user);
        res.send(result);
    });

    app.get("/users",  verifyJWT, async (req, res) => {
        const result = await manageUsersCollection.find().toArray();
        res.send(result);
    });



} catch (error) {
    console.log(error);
}


app.get("/", async (req, res) => {
    res.send("Welcome to the GypsyTales server side!");
});

app.listen(port, (req, res) => {
    console.log(`GypsyTales server listening on port ${port}`);
});