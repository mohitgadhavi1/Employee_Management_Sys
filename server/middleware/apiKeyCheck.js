
const keyTobeChecked = "76083a18-7857-4e74-86a2-b33532891125"

const apiKeyCheck = (req, res, next) => {

  const apiKey = req.header("X-API-Key");

  if (!apiKey) {
    return res.status(401).json({ error: "API key missing in headers." });
  }
  if (apiKey !== keyTobeChecked) {
    return res.status(403).json({ error: "Invalid API key." });
  }

  next(); // Continue to the next middleware or route handler
};

module.exports = apiKeyCheck;
