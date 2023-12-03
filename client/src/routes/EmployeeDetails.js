// src/components/EmployeeDetails.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
  const { employeeId } = useParams();
  const employee = useSelector((state) =>
    state.employees.find((emp) => emp.id.toString() === employeeId)
  );

  if (!employee) {
    return <p>Employee not found</p>;
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{employee.name}</h2>
      <p>Email: {employee.email}</p>
      <p>Position: {employee.position}</p>
 
    </div>
  );
};

export default EmployeeDetails;
