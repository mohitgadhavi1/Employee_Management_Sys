const uuid = require("uuid");

const generateApiKey = () => {
  console.log(uuid.v4());
  return uuid.v4();
};

generateApiKey();
