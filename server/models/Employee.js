const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  location: String,
});

module.exports = mongoose.model('Employee', employeeSchema);
