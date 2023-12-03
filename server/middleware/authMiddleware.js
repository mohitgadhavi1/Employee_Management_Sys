const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyTokenManager = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1] || null;

  if (!token) {
    return res
      .status(401)
      .json({ error: "Access denied. Token not provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY_MANAGER);
    // console.log("decoded", decoded);
    req.user = decoded;

    next();
  } catch (error) {
    console.error(error.name);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token has expired" });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token" });
    }

    res.status(401).json({ error: "Authentication error" });
  }
};
const verifyTokenEmployee = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1] || null;

  if (!token) {
    return res
      .status(401)
      .json({ error: "Access denied. Token not provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY_EMPLOYEE);
    req.user = decoded;

    next();
  } catch (error) {
    console.error(error.name);

    // Check if the error is due to token expiration
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token has expired" });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token" });
    }

    res.status(401).json({ error: "Authentication error" });
  }
};

module.exports = { verifyTokenManager, verifyTokenEmployee };
