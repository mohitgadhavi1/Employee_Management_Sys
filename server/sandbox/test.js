const jwt = require('jsonwebtoken');
const decodedToken = jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTZhZGUzNjA1NTQwNjUxNmY1NDM1OGUiLCJpYXQiOjE3MDE1MjM2MjIsImV4cCI6MTcwMTUyNzIyMn0.Gjdj9Ma90vELBizd96Lh_jchCdQNrepPTnpZB3iqmKg");
console.log(decodedToken);
