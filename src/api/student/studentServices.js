const Student = require("../../models/student");

const getStudentByRollNo = async (rollNumber) => {
    try{
        const student = await Student.findOne({ rollNumber });
        if (!student) {
            throw new Error("Student not found.")
            
        }
        return Promise.resolve(student);
    }
    catch(err){
        return Promise.reject(err);
    }
}

module.exports = {
    getStudentByRollNo
}