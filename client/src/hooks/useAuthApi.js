import { useDispatch } from "react-redux";
import {
  signupUser as signupUserUrl,
  loginUser as loginUserUrl,
} from "../services";

import { useState } from "react";
import { setToken } from '../store/features/authSlice';

export const useSignupUser = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signupUser = async (newUser) => {
    setLoading(true);
    try {
      const response = await fetch(signupUserUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("User signup failed");
      }
      const { token } = await response.json();
      dispatch(setToken(token));
     
      console.log(token);
    } catch (error) {
  
      setError(error.message);
      console.error("User signup failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return { signupUser, loading, error };
};

export const useLoginUser = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginUser = async (existingUser) => {
    setLoading(true);
    try {
      const response = await fetch(loginUserUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(existingUser),
      });

      if (!response.ok) {
        throw new Error("User login failed");
      }

      const { token } = await response.json();
      dispatch(setToken(token));
     
      console.log(token);
    } catch (error) {
     
      setError(error.message);
      console.error("User login failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading, error };
};
