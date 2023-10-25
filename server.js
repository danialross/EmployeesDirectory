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

//get all items in mongodb
app.get("/api/employees", async (req, res) => {
  try {
    const employees = await Employees.find();
    console.log("Database sent");
    res.send(employees);
  } catch (e) {
    console.log("Database could not be retrieved");
    res.send({ error: e.message });
  }
});

//checking if item exist
app.get("/api/employees/:id", async (req, res) => {
  const employeeId = req.params.id;
  try {
    const result = await Employees.findById(employeeId);
    if (result) {
      res.send(result);
    } else if (!result) {
      res.send("Employee does not exist");
    }
    console.log({ Employee: result });
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ error: e.message });
  }
});

//adding new employees
app.post("/api/employees", async (req, res) => {
  const newEmployee = new Employees({
    name: req.body.name,
    title: req.body.title,
    img: req.body.img,
  });

  try {
    newEmployee.save();
    console.log("Successfully added : " + newEmployee);
    res.send("Successfully added : " + newEmployee);
  } catch (e) {
    console.log("Error, could not save " + newEmployee);
    res.send("Error, could not save " + newEmployee);
  }
});

//changing employees props
app.put("/api/employees/:id", async (req, res) => {
  const employeeId = req.params.id;
  try {
    const result = await Employees.replaceOne({ _id: employeeId }, req.body);

    if (result.modifiedCount === 1) {
      console.log("Employee with ID " + employeeId + " has been updated");
    } else {
      console.log("Employee with ID " + employeeId + " not found");
    }
    res.send({ updatedCount: result.modifiedCount });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

//removing employees by id
app.delete("/api/employees/:id", async (req, res) => {
  const employeeId = req.params.id;

  try {
    const result = await Employees.deleteOne({ _id: employeeId });

    if (result.deletedCount === 1) {
      console.log("Employee with ID " + employeeId + " has been deleted");
    } else {
      console.log("Employee with ID " + employeeId + " not found");
    }
    res.send({ deletedCount: result.deletedCount });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
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

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

start();
