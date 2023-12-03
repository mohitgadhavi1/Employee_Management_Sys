// src/components/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginUser } from "../hooks/useAuthApi";

const Login = () => {
  const [userType, setUserType] = useState("employee");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, loading, error } = useLoginUser();

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingUser = { username, password };
    await loginUser(existingUser);

    console.log("User logged in successfully");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-white p-8 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="border rounded-md w-full py-2 px-3"
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border rounded-md w-full py-2 px-3"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="userType"
          >
            User Type
          </label>
          <select
            className="border rounded-md w-full py-2 px-3"
            id="userType"
            name="userType"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        <button
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          type="submit"
        >
          Log in
        </button>
        <p className="mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign up here
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default Login;
