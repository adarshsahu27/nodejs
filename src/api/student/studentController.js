const Student = require("../../models/student");

const createStudent = async (req, res, next) => {
  try {
    const { name, gender, email, dob, standard, rollNumber, contactNumber, vaccinated, address, state, pincode } =
      req.body;
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
      const { rollNumber} = req.body;

      const student = await Student.deleteOne();
  
      return res.status(200).json(student);
    } 
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };

  const updateStudent = async (req, res, next) => {
    try {
      const { rollNumber} = req.body;

      let student = await Student.findOneAndUpdate({rollNumber}, req.body);
       student = await Student.findOne({rollNumber}); 
      return res.status(200).json(student);
    } 
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };



module.exports = { createStudent, getStudent , listStudent, deleteStudent , updateStudent};
