const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: String,
  title: String,
  img: String,
  index: Number,
});

module.exports = mongoose.model("Employees", employeeSchema);
