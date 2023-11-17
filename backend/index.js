const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const api = require("./api");

const app = express();
const port = 3000;

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const connectToDB = async () => {
  console.log("Connecting to MongoDB...");
  await mongoose.connect("mongodb://0.0.0.0:27017/redbull");
  console.log("Connected to MongoDB");
};

app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  connectToDB()
  console.log(`Example app listening on port ${port}🔥`);
});
