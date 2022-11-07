const express = require("express");
const router = express.Router();

const {createStudent, getStudent, listStudent, deleteStudent , updateStudent, totalStudent, similarName, vaccinateStudent } = require("./studentController");

router.post("/", createStudent);
router.get("/", getStudent);
router.get("/all", listStudent);
router.delete("/", deleteStudent);
router.put("/", updateStudent);
router.get("/standard", totalStudent);
router.get("/name", similarName);
router.put("/vaccine", vaccinateStudent);

module.exports = router;