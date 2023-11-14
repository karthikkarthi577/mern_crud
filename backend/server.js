const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/userroutes");

//middlewares
app.use(cors());
app.use(express.json());
app.use("/", router);
mongoose.set('strictQuery', true)

//dbconnection
mongoose.connect("mongodb://127.0.0.1:27017/mern_crud", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("db  connected");
});
app.get("/", (req, res) => {
  res.send("data");
});
//listening
app.listen(5000, () => {
  console.log("listening on port 5000");
});
