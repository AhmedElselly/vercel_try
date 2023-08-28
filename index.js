const express = require("express");
const cors = require("cors"); // Import the cors package
const app = express();
const PORT = process.env.PORT || 9000;
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const User = require("./models/User");
const jwt = require("jsonwebtoken");

const uri =
    "mongodb+srv://admin:yT0GLc05LNI1ohDi@userdb.udxsivq.mongodb.net/?retryWrites=true&w=majority";

const mongoose = require("mongoose");
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to DB')
}).catch(err => {
    console.log('Couldn\'t connect to DB');
});

// Generate a random secret key
const secretKey = 'kjbnasdkfjnskjanfkjnafkjnsakfjnkajsdnfkjnasdkjfnkla'

const allowedOrigins = ["https://mohammedhelal591.github.io/my-movies-app/"];

// Middleware
app.use(express.json());
// Use the cors middleware
app.use(
    cors({
        origin: '*',
    })
);


app.get("/", (req, res) => {
    res.send("Express on Vercel");
});



app.listen(5000, () => {
    console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;