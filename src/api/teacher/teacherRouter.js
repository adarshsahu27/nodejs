const express = require("express");
const router = express.Router();

const {
  createTeacher,
  getTeacher,
  listTeacher,
  deleteTeacher,
  updateTeacher,
  updateStandard,
  deleteStandard,
} = require("./teacherController");

router.post("/", createTeacher);
router.get("/", getTeacher);
router.get("/all", listTeacher);
router.delete("/", deleteTeacher);
router.put("/", updateTeacher);
router.put("/standard", updateStandard);
router.put("/delStandard", deleteStandard);

module.exports = router;
