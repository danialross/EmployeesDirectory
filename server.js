const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Employees = require("./models/employees");
const app = express();
const PORT = 3001;
mongoose.set("strictQuery", false);

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded());

app.get("/api/employees", async (req, res) => {
  const employees = await Employees.find();
  console.log("Database sent");
  res.send(employees);
});

app.post("/api/employees", async (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// app.listen(PORT, () => {
//   console.log("Server is Listening on port " + PORT);
// });

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://danialross:RdWHiYhyPuisb8us@employees.l1ghc80.mongodb.net/Employees?retryWrites=true&w=majority"
    );

    app.listen(PORT, () => {
      console.log("Server is Listening on port " + PORT);
    });
  } catch (e) {
    console.log(e.message);
  }
};

start();
