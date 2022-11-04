const teacher = require("../../models/teacher");

const createTeacher= async (req, res, next) => {
  try {
    const { name, gender, email, teacherID, salary, standard, contactNumber, vaccinated, address, state, pincode } =
      req.body;
    let newTeacher = {
      name,
      gender,
      email,
      teacherID,
      salary,
      standard,
      contactNumber,
      vaccinated,
      address,
      state,
      pincode,
      createdAt: new Date().toISOString(),
    };
    const teacher = await Teacher.create(newTeacher);

    return res.status(200).json(teacher);
  } 
  catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getTeacher = async (req, res, next) => {
    try {
      const { teacherID} = req.query;

      const teacher = await Student.findOne({teacherID});
  
      return res.status(200).json(teacher);
    } 
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };

  const listTeacher = async (req, res, next) => {
    try {
      const { teacherID} = req.query;

      const teacher = await Student.find();
  
      return res.status(200).json(teacher);
    } 
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };


//   const deleteStudent = async (req, res, next) => {
//     try {
//       const { rollNumber} = req.body;

//       const student = await Student.deleteOne();
  
//       return res.status(200).json(student);
//     } 
//     catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   };

//   const updateStudent = async (req, res, next) => {
//     try {
//       const { rollNumber} = req.body;

//       let student = await Student.findOneAndUpdate({rollNumber}, req.body);
//        student = await Student.findOne({rollNumber}); 
//       return res.status(200).json(student);
//     } 
//     catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   };



module.exports = { createTeacher, getTeacher , listTeacher };

//, deleteStudent , updateStudent