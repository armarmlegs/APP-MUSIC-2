require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => console.log("you already know, mongodb connected :)"));

mongoose.connection.on("error", () => console.log("nay db error sorry :("));