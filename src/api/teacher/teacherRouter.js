const express = require("express");
const router = express.Router();

const {createTeacher, getTeacher, listTeacher}= require("./teacherController");

router.post("/", createTeacher);
router.get("/", getTeacher);
router.get("/all", listTeacher);
// router.delete("/", deleteStudent);
// router.put("/", updateStudent);


module.exports = router;