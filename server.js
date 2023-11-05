const express = require("express");
const mongoose = require("mongoose");
const Employees = require("./src/models/employees");
const cors = require("cors");
const app = express();
const PORT = 3001;
mongoose.set("strictQuery", false);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// const people = [
//   {
//     name: "Alice Johnson",
//     title: "Software Engineer",
//     level: "Junior",
//     image: "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg",
//   },
//   {
//     name: "Bob Smith",
//     title: "Product Manager",
//     level: "Mid Management",
//     image: "https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg",
//   },
//   {
//     name: "Charlie Brown",
//     title: "Data Scientist",
//     level: "Executive",
//     image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg",
//   },
//   {
//     name: "David Lee",
//     title: "UX Designer",
//     level: "Mid Management",
//     image: "https://images.pexels.com/photos/2110858/pexels-photo-2110858.jpeg",
//   },
//   {
//     name: "Eva Williams",
//     title: "Frontend Developer",
//     level: "Junior",
//     image: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg",
//   },
//   {
//     name: "Frank Martinez",
//     title: "Marketing Specialist",
//     level: "Junior",
//     image: "https://images.pexels.com/photos/3008355/pexels-photo-3008355.jpeg",
//   },
//   {
//     name: "Grace Harris",
//     title: "Business Analyst",
//     level: "Mid Management",
//     image: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg",
//   },
//   {
//     name: "Henry Clark",
//     title: "Project Manager",
//     level: "Executive",
//     image: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
//   },
//   {
//     name: "Irene Davis",
//     title: "Backend Developer",
//     level: "Junior",
//     image: "https://images.pexels.com/photos/2080322/pexels-photo-2080322.jpeg",
//   },
//   {
//     name: "Jack Taylor",
//     title: "UI Designer",
//     level: "Mid Management",
//     image:
//       "https://images.pexels.com/photos/2089984/pexels-photo-2089984.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     name: "Kate Lewis",
//     title: "Software Engineer",
//     level: "Junior",
//     image: "https://images.pexels.com/photos/2663803/pexels-photo-2663803.jpeg",
//   },
//   {
//     name: "Liam Walker",
//     title: "Product Manager",
//     level: "Mid Management",
//     image:
//       "https://images.pexels.com/photos/14697557/pexels-photo-14697557.jpeg",
//   },
//   {
//     name: "Mia Hall",
//     title: "Data Scientist",
//     level: "Executive",
//     image: "https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg",
//   },
//   {
//     name: "Noah Thompson",
//     title: "UX Designer",
//     level: "Mid Management",
//     image: "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg",
//   },
//   {
//     name: "Olivia Martinez",
//     title: "Frontend Developer",
//     level: "Junior",
//     image: "https://images.pexels.com/photos/2772099/pexels-photo-2772099.jpeg",
//   },
//   {
//     name: "Peter Baker",
//     title: "Marketing Specialist",
//     level: "Junior",
//     image: "https://images.pexels.com/photos/5160850/pexels-photo-5160850.jpeg",
//   },
//   {
//     name: "Quinn Johnson",
//     title: "Business Analyst",
//     level: "Mid Management",
//     image: "https://images.pexels.com/photos/2240173/pexels-photo-2240173.jpeg",
//   },
//   {
//     name: "Riley Evans",
//     title: "Project Manager",
//     level: "Executive",
//     image: "https://images.pexels.com/photos/2982149/pexels-photo-2982149.jpeg",
//   },
//   {
//     name: "Sophia Young",
//     title: "Backend Developer",
//     level: "Junior",
//     image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
//   },
//   {
//     name: "Thomas White",
//     title: "UI Designer",
//     level: "Mid Management",
//     image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
//   },
//   {
//     name: "Uma Davis",
//     title: "Software Engineer",
//     level: "Junior",
//     image: "https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg",
//   },
//   {
//     name: "Victor Lee",
//     title: "Product Manager",
//     level: "Mid Management",
//     image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
//   },
//   {
//     name: "Wendy Harris",
//     title: "Data Scientist",
//     level: "Executive",
//     image: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg",
//   },
//   {
//     name: "Xavier Clark",
//     title: "UX Designer",
//     level: "Mid Management",
//     image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
//   },
//   {
//     name: "Yara Martinez",
//     title: "Frontend Developer",
//     level: "Junior",
//     image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg",
//   },
//   {
//     name: "Zachary Taylor",
//     title: "Marketing Specialist",
//     level: "Junior",
//     image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
//   },
//   {
//     name: "Ava Walker",
//     title: "Business Analyst",
//     level: "Mid Management",
//     image: "https://images.pexels.com/photos/2167673/pexels-photo-2167673.jpeg",
//   },
//   {
//     name: "Benjamin Baker",
//     title: "Project Manager",
//     level: "Executive",
//     image: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg",
//   },
//   {
//     name: "Chloe Johnson",
//     title: "Backend Developer",
//     level: "Junior",
//     image: "https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg",
//   },
//   {
//     name: "Daniel Evans",
//     title: "UI Designer",
//     level: "Mid Management",
//     image: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg",
//   },
//   {
//     name: "Ella Young",
//     title: "Software Engineer",
//     level: "Junior",
//     image: "https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg",
//   },
//   {
//     name: "Finn White",
//     title: "Product Manager",
//     level: "Executive",
//     image: "https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg",
//   },
// ];

// adding people to database using mongoose schema
// people.forEach(async (personData) => {
//   const person = new Employees(personData);
//   try {
//     const savedPerson = await person.save();
//     console.log("Person saved successfully:", savedPerson);
//   } catch (error) {
//     console.error("Error saving person:", error);
//   }
// });

// clearing db
// async function clearDatabase() {
//   try {
//     await Employees.deleteMany({});
//     console.log("All documents removed from the collection.");
//   } catch (error) {
//     console.error("Error clearing the collection:", error);
//   } finally {
//     // Close the connection to MongoDB
//     mongoose.connection.close();
//   }
// }
// clearDatabase();

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
      res.status(404).send("Employee does not exist");
    }
    console.log({ Employee: result });
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ error: e.message });
  }
});

//get items based on ranking in mongodb
app.get("/api/search/:category/:query", async (req, res) => {
  const { category, query } = req.params;

  const validCategories = ["executive", "mid", "junior"];

  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }

  try {
    const search = category + " " + query;
    const employees = await Employees.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { title: { $regex: query, $options: "i" } },
      ],
    });
    res.json(employees);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

//adding new employees
app.post("/api/employees", async (req, res) => {
  const newEmployee = new Employees({
    name: req.body.name,
    title: req.body.title,
    image: req.body.image,
    level: req.body.level,
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
