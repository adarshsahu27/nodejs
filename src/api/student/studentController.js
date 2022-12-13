const Student = require("../../models/student");

const {schema} = require("../../validator/schemas");

const studentService = require("./studentServices");

const createStudent = async (req, res, next) => {
  try {
    const {
      name,
      gender,
      email,
      dob,
      standard,
      rollNumber,
      contactNumber,
      vaccinated,
      address,
      state,
      pincode,
    } = req.body;
    let newStudent = {
      name,
      gender,
      email,
      dob,
      standard,
      rollNumber,
      contactNumber,
      vaccinated,
      address,
      state,
      pincode,
      createdAt: new Date().toISOString(),
    };
    const student = await Student.create(newStudent);

    return res.status(200).json(student);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getStudent = async (req, res, next) => {
  try {
    const { rollNumber } = req.query;
    if (rollNumber === "") {
      return res.status(400).json({ error: "Input value can't be empty." });
    }

    const student = await studentService.getStudentByRollNo(rollNumber);

    return res.status(200).json(student);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({status:false, message:err.message});
  }
};

const listStudent = async (req, res, next) => {
  try {
    // const { rollNumber} = req.query;
    const student = await Student.find();

    return res.status(200).json(student);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    const { rollNumber } = req.body;
    if (rollNumber === "") {
      return res.status(400).json({ error: "Input value can't be empty." });
    }

    const student = await Student.deleteOne({ rollNumber });

    return res.status(200).json(student);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const updateStudent = async (req, res, next) => {
  try {
    const { rollNumber } = req.body;
    // if (rollNumber === "") {
    //   return res.status(400).json({ error: "Input value can't be empty." });
    // }


    const result= await schema.validate(req.body);
    console.log(result);
    const {error} = result;
    if (error !== null){
        const {details} = error;
        const message= details.map(i=> i.message).join(",")
        return res.status(400).json(message);
    }


    let student = await Student.findOneAndUpdate({ rollNumber }, req.body);
    student = await Student.findOne({ rollNumber });
    return res.status(200).json(student);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const totalStudent = async (req, res, next) => {
  try {
    const { standard } = req.query;
    if (standard === "") {
      return res.status(400).json({ error: "Input value can't be empty." });
    }

    const student = await Student.find({ standard });
    // if (student) {
      let length = { noOfStudents: student.length };
      return res.status(200).json(length);
    // }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const similarName = async (req, res, next) => {
  try {
    const { name } = req.query;
    if (name === "") {
      return res.status(400).json({ error: "Input value can't be empty." });
    }

    const student = await Student.find({
      name: { $regex: name, $options: "<i>" },
    });
    return res.status(200).json(student);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const vaccinateStudent = async (req, res, next) => {
  try {
    const { rollNumber, standard, vaccinated } = req.body;
    if (rollNumber === "" || standard=== "" || vaccinated=== "" ) {
      return res.status(400).json({ error: "All fields are mandatory." });
    }


    let student = await Student.findOneAndUpdate(
      { rollNumber, standard },
      { vaccinated }
    );
    student = await Student.findOne({ rollNumber, standard });
    return res.status(200).json(student);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports = {
  createStudent,
  getStudent,
  listStudent,
  deleteStudent,
  updateStudent,
  totalStudent,
  similarName,
  vaccinateStudent,
};
