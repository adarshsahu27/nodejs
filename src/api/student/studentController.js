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

      const student = await Student.find({rollNumber});
  
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

  const totalStudent = async (req, res, next) => {
    try {
      const { standard } = req.query;
      const student = await Student.find({standard});
      if (student) {
       let length= {noOfStudents: student.length}
       
       
      //  student.length;
      //  console.log(`Total no. of in this standard are : ` +length );
  
      return res.status(200).json(length);
    } }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };


  const similarName = async (req, res, next) => {
    try {
      const {name} = req.query;

      const student = await Student.find({name: { $regex: name , $options: '<i>' }});
      return res.status(200).json(student);
    } 
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };



  const vaccinateStudent = async (req, res, next) => {
    try {
      const { rollNumber, standard, vaccinated } = req.body;
      

      let student = await Student.findOneAndUpdate({rollNumber, standard}, {vaccinated});
       student = await Student.findOne({rollNumber, standard}); 
      return res.status(200).json(student);
    } 
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };









module.exports = { createStudent, getStudent , listStudent, deleteStudent , updateStudent, totalStudent, similarName, vaccinateStudent};
