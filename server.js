//Environment Variables
require("dotenv").config();

const express = require("express");
const bodyparser = require("body-parser");

//Connect Database
require("./db/connect")

//Initialize App
const app = express();

//MiddleWares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//Routes
app.use("/api/items", require("./routes/api/items"))


//Server
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server started successfully on port ${port}`);
})