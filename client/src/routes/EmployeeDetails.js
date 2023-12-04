// src/components/EmployeeDetails.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const token = useSelector((state) => state.auth.token);

  const isAuthenticated = token ? true : false;
  const { employeeId } = useParams();
  const employee = useSelector((state) =>
    state.employees.find((emp) => emp.id.toString() === employeeId)
  );

  if (!employee) {
    return <p>Employee not found</p>;
  }

 

  return isAuthenticated ? (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{employee.name}</h2>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default EmployeeDetails;
