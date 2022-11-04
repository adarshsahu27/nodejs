const Student = require("../../models/student");

const createStudent = async (req, res, next) => {
  try {
    const { name, gender, email, standard, rollNumber, contactNumber } =
      req.body;
    let newStudent = {
      name,
      gender,
      email,
      standard,
      rollNumber,
      contactNumber,
      createdAt: new Date().toISOString(),
    };
    const student = await Student.create(newStudent);

    return res.status(200).json(student);
  } 
  catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getStudent = async (req, res, next) => {
    try {
      const { rollNumber} = req.query;

      const student = await Student.findOne({rollNumber});
  
      return res.status(200).json(student);
    } 
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };

  const listStudent = async (req, res, next) => {
    try {
      const { rollNumber} = req.query;

      const student = await Student.find();
  
      return res.status(200).json(student);
    } 
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };


  const deleteStudent = async (req, res, next) => {
    try {
      const { rollNumber} = req.query;

      const student = await Student.deleteOne({rollNumber});
  
      return res.status(200).json(student);
    } 
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };

  const updateStudent = async (req, res, next) => {
    try {
      const { rollNumber} = req.query;

      const student = await Student.updateOne({rollNumber:"1"},{standard:"11th"});
  
      return res.status(200).json(student);
    } 
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };



//   const updateStudent = async (req, res, next) => {
//     try {
//       const filter = req.query.rollNumber;
//       const update = req.query.standard;

//       const student = await Student.findOneAndUpdate({filter,update});
    
//       student.rollNumber;
//       student.standard;
//       student = await Student.findOne(filter); 
//       student.standard;
//       return res.status(200).json(student);
//     } 
//     catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   };



module.exports = { createStudent, getStudent , listStudent, deleteStudent , updateStudent};
