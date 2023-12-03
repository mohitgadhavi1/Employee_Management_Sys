// src/reducers/employeeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employees",
  initialState: [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      position: "Developer",
      department: null,
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      position: "Designer",
      department: null,
    },
    // Add more initial employees as needed
  ],
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
  },
});

export const { assignDepartment } = employeeSlice.actions;
export default employeeSlice.reducer;
