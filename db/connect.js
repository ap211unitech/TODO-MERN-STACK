const mongoose = require("mongoose");
const config = require("config");
const mongodbURL = config.get("mongodbURL");

mongoose.connect(mongodbURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    () => {
        console.log("DB connected successfully..")
    }
)