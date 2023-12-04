// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import departmentReducer from "./features/departmentSlice";
import employeeReducer from "./features/employeeSlice";
import authSlice from "./features/authSlice";

const rootReducer = combineReducers({
  department: departmentReducer,
  employees: employeeReducer,
  auth: authSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
