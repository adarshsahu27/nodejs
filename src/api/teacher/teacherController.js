const Teacher = require("../../models/teacher");

const createTeacher= async (req, res, next) => {
  try {
    const { name, gender, teacherId, salary, standard, vaccinated, address, pincode } =
      req.body;
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
  } 
  catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getTeacher = async (req, res, next) => {
    try {
      const {teacherId} = req.query;

      const teacher = await Student.findOne({teacherId});
  
      return res.status(200).json(teacher);
    } 
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };

  const listTeacher = async (req, res, next) => {
    try {
      const { teacherId} = req.query;

      const teacher = await Teacher.find();
  
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


  const updateStandard = async (req, res, next) => {
    try {
      const { teacherId } = req.body;

      let teacher = await Teacher.updateOne({teacherId},
        { $push:{standard: req.body.standard}}); 
      return res.status(200).json(teacher);
    } 
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };


  const deleteStandard = async (req, res, next) => {
    try {
      const { teacherId } = req.body;

      let teacher = await Teacher.findOneAndUpdate({teacherId},
        { $pull:{standard: req.body.standard}}); 
      return res.status(200).json(teacher);
    } 
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };






module.exports = { createTeacher, getTeacher , listTeacher, updateStandard, deleteStandard };

