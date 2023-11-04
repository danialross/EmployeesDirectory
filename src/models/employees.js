const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: String,
  title: String,
  image: String,
  level: String,
});

module.exports = mongoose.model("Employees", employeeSchema);
