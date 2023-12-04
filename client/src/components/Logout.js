// src/components/Logout.js
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useNavigate } from "react-router-dom";
import { clearToken } from "../store/features/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearToken());

    navigate("/login");
  };

  return (
    <div className="absolute top-4 right-4">
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
