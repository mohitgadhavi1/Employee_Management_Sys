// src/reducers/employeeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    assignDepartment: (state, action) => {
      const { employeeId, departmentId } = action.payload;
      const employeeIndex = state.findIndex(
        (employee) => employee.id === employeeId
      );
      if (employeeIndex !== -1) {
        state[employeeIndex].department = departmentId;
      }
    },
    initialEmployees: (state, action) => {
      state = action.payload;
    },
  },
});

export const { assignDepartment, initialEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
