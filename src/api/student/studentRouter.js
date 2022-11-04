const express = require("express");
const router = express.Router();

const {createStudent, getStudent, listStudent, deleteStudent , updateStudent}= require("./studentController");

router.post("/", createStudent);
router.get("/", getStudent);
router.get("/all", listStudent);
router.delete("/", deleteStudent);
router.put("/", updateStudent);


module.exports = router;