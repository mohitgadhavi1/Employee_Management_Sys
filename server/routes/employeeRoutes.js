const express = require("express");
const employeeController = require("../controller/employeeController.js");
const { verifyTokenManager } = require("../middleware/authMiddleware.js");
const router = express.Router();

// router.use(verifyTokenManager);

router.post("/", employeeController.createEmployee);

router.get("/", employeeController.getAllEmployees);

router.put(
  "/:employeeId",
  verifyTokenManager,
  employeeController.updateEmployee
);

router.delete(
  "/:employeeId",
  verifyTokenManager,
  employeeController.deleteEmployee
);

module.exports = router;
