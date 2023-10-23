const express = require("express");
const mongoose = require("mongoose");
const Employees = require("./models/employees");
const cors = require("cors");
const app = express();
const PORT = 3001;
mongoose.set("strictQuery", false);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/api/employees", async (req, res) => {
  const employees = await Employees.find();
  console.log("Database sent");
  res.status(200).send(employees);
});

//adding new employees
app.post("/api/employees", async (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//testing
app.get("/api/employees/:id", async (req, res) => {
  const employeeId = req.params.id;
  const result = await Employees.findById(employeeId);
  console.log(result);
  res.send(result);
});

//changing employees
app.put("/api/employees/:id", async (req, res) => {
  const employeeId = req.params.id;
  const result = await Employees.replaceOne({ _id: employeeId }, req.body);
  console.log("Updated = " + result.modifiedCount);
  res.send({ updatedCount: result.modifiedCount });
});

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
