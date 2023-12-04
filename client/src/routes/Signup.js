// src/components/Signup.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignupUser } from "../hooks/useAuthApi";


const Signup = () => {
  const navigate = useNavigate()
  const [userType, setUserType] = useState("employee");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signupUser, loading, error } = useSignupUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("Username:", username);
    // console.log("Password:",password);
    // console.log("User Type:", userType);

    const newUser = { username, password, userType };


    try {
      await signupUser(newUser);
      
      navigate("/")
    } catch (error) {
   
      console.error('Signup failed:', error);
    }
  };


  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-white p-8 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
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
            placeholder="Choose a username"
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
            placeholder="Choose a password"
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
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        <button
          className="bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
          type="submit"
        >
          Sign up
        </button>
        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Log in here
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default Signup;
