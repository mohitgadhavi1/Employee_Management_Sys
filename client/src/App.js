import React from "react";
import { Link, Navigate } from "react-router-dom";
import {
  useFetchDepartmentList,
  useFetchEmployeeList,
} from "./hooks/useFetchDetails";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";

function App() {
  const token = useSelector((state) => state.auth.token);

  const isAuthenticated = token ? true : false;

  const { employeeList, loading1, error1 } = useFetchEmployeeList();
  const { departmentList, loading2, error2 } = useFetchDepartmentList();

  return isAuthenticated ? (
    <div className="flex items-center justify-center h-screen">
      <Logout />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Admin Dashnboard</h1>
        <nav className="mb-8">
          <Link
            to="/departments"
            className="mr-4 text-blue-500 hover:underline"
          >
            Departments
          </Link>
          <Link to="/employees" className="text-blue-500 hover:underline">
            Employees
          </Link>
        </nav>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}

export default App;
