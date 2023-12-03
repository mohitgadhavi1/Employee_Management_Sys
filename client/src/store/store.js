// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import departmentReducer from "./features/departmentSlice";
import employeeReducer from "./features/employeeSlice";

const rootReducer = combineReducers({
  department: departmentReducer,
  employees: employeeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
