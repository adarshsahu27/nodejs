const Teacher = require("../../models/teacher");

const createTeacher = async (req, res, next) => {
  try {
    const {
      name,
      gender,
      teacherId,
      salary,
      standard,
      vaccinated,
      address,
      pincode,
    } = req.body;
    let newTeacher = {
      name,
      gender,
      teacherId,
      salary,
      standard,
      vaccinated,
      address,
      pincode,
      createdAt: new Date().toISOString(),
    };
    const teacher = await Teacher.create(newTeacher);

    return res.status(200).json(teacher);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getTeacher = async (req, res, next) => {
  try {
    const { teacherId } = req.query;
    if (teacherId === "") {
      return res.status(400).json({ error: "Input value can't be empty." });
    }

    const teacher = await Teacher.findOne({ teacherId });

    return res.status(200).json(teacher);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const listTeacher = async (req, res, next) => {
  try {
    const { teacherId } = req.query;

    const teacher = await Teacher.find();

    return res.status(200).json(teacher);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const deleteTeacher = async (req, res, next) => {
  try {
    const { teacherId } = req.body;
    if (teacherId === "") {
      return res.status(400).json({ error: "Input value can't be empty." });
    }

    const teacher = await Teacher.deleteOne({ teacherId });

    return res.status(200).json(teacher);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const updateTeacher = async (req, res, next) => {
  try {
    const { teacherId } = req.body;
    if (teacherId === "") {
      return res.status(400).json({ error: "Input value can't be empty." });
    }

    let teacher = await Teacher.findOneAndUpdate({ teacherId }, req.body);
    teacher = await Teacher.findOne({ teacherId });
    return res.status(200).json(teacher);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const updateStandard = async (req, res, next) => {
  try {
    const { teacherId } = req.body;
    let teacher = await Teacher.findOne({ teacherId });
    if (
      teacher.standard.find((element) => element === req.body.standard) !==
      undefined
    ) {
      return res.status(400).json({ error: "Input Value is already present." });
    }

    teacher = await Teacher.updateOne(
      { teacherId },
      { $push: { standard: req.body.standard } }
    );

    return res.status(200).json(teacher);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const deleteStandard = async (req, res, next) => {
  try {
    const { teacherId } = req.body;

    let teacher = await Teacher.findOneAndUpdate(
      { teacherId },
      { $pull: { standard: req.body.standard } }
    );
    return res.status(200).json(teacher);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports = {
  createTeacher,
  getTeacher,
  listTeacher,
  deleteTeacher,
  updateTeacher,
  updateStandard,
  deleteStandard,
};

// const updateStandard = async (req, res, next) => {
//   try {
//     const { teacherId } = req.body;

//     let teacher = await Teacher.updateOne(
//       { teacherId },
//       { $push: { standard: req.body.standard } }
//     );
//     return res.status(200).json(teacher);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
// };
