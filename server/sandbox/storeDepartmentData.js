const mongoose = require('mongoose');
require("dotenv").config();

const departmentSchema = new mongoose.Schema({
  name: String,
  description: String,
});


const Department = mongoose.model('Department', departmentSchema);


mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));


  const departments = [
    { name: 'Human Resources', description: 'Responsible for personnel management, recruitment, employee relations, benefits administration, and training.' },
    { name: 'Finance and Accounting', description: 'Manages financial transactions, budgeting, financial reporting, and accounting activities.' },
    { name: 'Information Technology', description: 'Handles technology infrastructure, software development, network management, and technical support.' },
    { name: 'Marketing', description: 'Develops and executes marketing strategies, advertising, public relations, and market research.' },
    { name: 'Sales', description: 'Focuses on selling products or services, managing customer relationships, and achieving revenue targets.' },
    { name: 'Operations', description: 'Oversees day-to-day business operations, ensuring efficiency and effectiveness.' },
    { name: 'Customer Service', description: 'Provides assistance and support to customers, addressing inquiries, complaints, and issues.' },
    { name: 'Research and Development', description: 'Conducts research and develops new products, services, or technologies.' },
    { name: 'Product Management', description: 'Manages the development and lifecycle of products or services.' },
    { name: 'Legal and Compliance', description: 'Ensures the organization operates within legal and regulatory frameworks, handles contracts, and provides legal counsel.' },
    { name: 'Supply Chain', description: 'Manages the sourcing, procurement, production, and distribution of goods and services.' },
    { name: 'Quality Assurance', description: 'Ensures products or services meet quality standards through testing and quality control.' },
    { name: 'Project Management', description: 'Coordinates and oversees projects or programs to achieve specific goals.' },
    { name: 'Facilities Management', description: 'Manages physical workspaces, office facilities, and related services.' },
    { name: 'Public Relations', description: 'Manages the organization\'s public image, communication, and media relations.' },
    { name: 'Internal Audit', description: 'Conducts internal audits to ensure compliance with policies and procedures.' },
    { name: 'Risk Management', description: 'Identifies and manages potential risks to the organization.' },
    { name: 'Corporate Communications', description: 'Handles internal and external communication strategies.' },
    { name: 'Environmental, Health, and Safety', description: 'Ensures compliance with health, safety, and environmental regulations.' },
    { name: 'Training and Development', description: 'Provides employee training and development programs.' },
  ];


async function saveDepartments() {
  try {

    await Department.deleteMany({});


    const savedDepartments = await Department.create(departments);
    console.log('Departments saved to MongoDB:', savedDepartments);


    mongoose.connection.close();
  } catch (error) {
    console.error('Error saving departments to MongoDB', error);
  }
}


saveDepartments();