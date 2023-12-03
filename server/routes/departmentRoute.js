const express = require("express");
const  departmentController  = require("../controller/departmentController.js");
const {verifyTokenManager} = require('../middleware/authMiddleware.js');
const router = express.Router();

router.use(verifyTokenManager);

router.post('/', departmentController.createDepartment);

router.get('/', departmentController.getAllDepartments);

router.put('/:departmentId', departmentController.updateDepartment);

router.delete('/:departmentId', departmentController.deleteDepartment);

module.exports = router;

