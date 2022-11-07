const express = require("express");
const router = express.Router();

const {createTeacher, getTeacher, listTeacher, updateStandard, deleteStandard}= require("./teacherController");

router.post("/", createTeacher);
router.get("/", getTeacher);
router.get("/all", listTeacher);
// router.delete("/", deleteStudent);
router.put("/", updateStandard);
router.put("/del", deleteStandard);


module.exports = router;