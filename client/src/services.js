const BASE_URL = `http://localhost:3001`;

//================================== AUTH ============================================

export const signupUser = `${BASE_URL}/auth/signup`;
export const loginUser = `${BASE_URL}/auth/login`;

//====================================================================================

export const department = `${BASE_URL}/departments`;
export const employeeList = `${BASE_URL}/employeeList`;

export const filtedEmployeeList = (type, order) =>
  `${BASE_URL}/employeeList?${type}=${order}`;


//====================================================================================