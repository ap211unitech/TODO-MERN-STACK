const mongoose = require("mongoose");
const { mongodbURL } = require("../config/default.json")

mongoose.connect(mongodbURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("DB connected successfully..")
    }
)