
const Employee = require('../models/Employee'); 


const createEmployee = async (req, res) => {
  try {

    const { name, location, department } = req.body;

 
    const newEmployee = await Employee.create({
      name,
      location,
      department,
    });


    res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllEmployees = async (req, res) => {
  try {
 
    const employees = await Employee.find();


    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;

    const updatedEmployee = await Employee.findByIdAndUpdate(
      employeeId,
      req.body,
      { new: true } 
    );

    res.json(updatedEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;

    await Employee.findByIdAndDelete(employeeId);

    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
};
