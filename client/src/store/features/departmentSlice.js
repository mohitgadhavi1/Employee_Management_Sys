// src/reducers/departmentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const departmentSlice = createSlice({
  name: "departments",
  initialState: [],
  reducers: {
    addDepartment: (state, action) => {
      const newDepartment = {
        id: state.length + 1,
        name: action.payload,
      };
      return [...state, newDepartment];
    },
    updateDepartment: (state, action) => {
      const { id, name } = action.payload;
      return state.map((department) =>
        department.id === id ? { ...department, name } : department
      );
    },
    deleteDepartment: (state, action) => {
      const id = action.payload;
      return state.filter((department) => department.id !== id);
    },
    initialDepartment: (state, action) => {
      console.log("action.payload",action.payload)
      state = action.payload;
    },
  },
});

export const { addDepartment, updateDepartment, deleteDepartment,initialDepartment } =
  departmentSlice.actions;
export default departmentSlice.reducer;
