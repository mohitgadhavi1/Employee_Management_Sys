const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoute");
const employeeRoutes = require("./routes/employeeRoutes.js");
const departmentRoutes = require("./routes/departmentRoute.js");

require("dotenv").config();

let cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static("public"));

app.use(employeeRoutes);
app.use('/departments', departmentRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
