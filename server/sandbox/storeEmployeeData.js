const mongoose = require("mongoose");
require("dotenv").config();

const Employee = mongoose.model("Employee", {
  name: String,
  department: String,
  location: String,
});

mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    const dummyEmployees = [
        { name: 'John Doe', department: 'IT', location: 'New York' },
        { name: 'Jane Smith', department: 'HR', location: 'London' },
        { name: 'Bob Johnson', department: 'Marketing', location: 'Paris' },
        { name: 'Alice Lee', department: 'Finance', location: 'Tokyo' },
        { name: 'Charlie Brown', department: 'IT', location: 'Berlin' },
        { name: 'Emma Watson', department: 'Marketing', location: 'Sydney' },
        { name: 'David Miller', department: 'Finance', location: 'Toronto' },
        { name: 'Olivia Johnson', department: 'HR', location: 'Los Angeles' },
        { name: 'Michael Scott', department: 'Management', location: 'Scranton' },
        { name: 'Mia Williams', department: 'IT', location: 'Stockholm' },
      ];

    Employee.insertMany(dummyEmployees)
      .then((result) => {
        console.log(`${result.length} employees added to the database`);
      })
      .catch((error) => {
        console.error("Error inserting employees:", error);
      })
      .finally(() => {
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
