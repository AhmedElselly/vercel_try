const express = require("express");
const cors = require("cors"); // Import the cors package
const app = express();

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