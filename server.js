//Environment Variables
require("dotenv").config();

const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

//Connect Database
require("./db/connect")

//Initialize App
const app = express();

//MiddleWares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//Routes
app.use("/items", require("./routes/api/items"));
app.use("/users", require("./routes/api/user"));
app.use("/auth", require("./routes/api/auth"));

//Serve static assets if application is in production
if (process.env.NODE_ENV === "production") {
    //Set Static Folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


//Server
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server started successfully on port ${port}`);
})