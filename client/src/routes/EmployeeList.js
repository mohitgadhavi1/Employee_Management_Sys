import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { assignDepartment } from "../store/features/employeeSlice";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAssignDepartment = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const handleDepartmentSelection = (departmentId) => {
    dispatch(
      assignDepartment({ employeeId: selectedEmployee.id, departmentId })
    );
    setShowModal(false);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="mb-4">
              <td>
                <Link
                  to={`/employees/${employee.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {employee.name}
                </Link>
              </td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td>{employee.department || "Not Assigned"}</td>
              <td>
                <button
                  className="bg-green-500 text-white rounded-md py-2 px-4 ml-2 hover:bg-green-600"
                  onClick={() => handleAssignDepartment(employee)}
                >
                  Assign Department
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (

        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Select Department</h2>
      
            <button
              className="bg-blue-500 text-white rounded-md py-2 px-4 ml-2 hover:bg-blue-600"
              onClick={() =>
                handleDepartmentSelection(/* selected departmentId */)
              }
            >
              Assign Department
            </button>
            <button
              className="bg-gray-500 text-white rounded-md py-2 px-4 ml-2 hover:bg-gray-600"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
