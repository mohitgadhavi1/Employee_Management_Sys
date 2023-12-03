const Department = require('../models/Department');


exports.createDepartment = async (req, res) => {
  try {
    const { name, description } = req.body;

    const newDepartment = await Department.create({
      name,
      description,
    });

    res.status(201).json({ department: newDepartment, message: 'Department created successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.updateDepartment = async (req, res) => {
  try {
    const { departmentId } = req.params;
    const { name, description } = req.body;

    const updatedDepartment = await Department.findByIdAndUpdate(
      departmentId,
      { name, description },
      { new: true } 
    );

    if (!updatedDepartment) {
      return res.status(404).json({ error: 'Department not found' });
    }

    res.json({ department: updatedDepartment, message: 'Department updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.deleteDepartment = async (req, res) => {
  try {
    const { departmentId } = req.params;

    const deletedDepartment = await Department.findByIdAndDelete(departmentId);

    if (!deletedDepartment) {
      return res.status(404).json({ error: 'Department not found' });
    }

    res.json({ department: deletedDepartment, message: 'Department deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};