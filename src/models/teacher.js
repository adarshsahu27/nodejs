const { Schema, model} = require("mongoose");
//Teacher Schema

const teacherSchema= new Schema({
    name: String,      // String is shorthand for {type: String}
    gender: String,
    teacherId: {
        type: Number,
        unique: true,
    },
    salary: Number,
    standard: [String],
    vaccinated: Boolean,
    address: String,
    pincode: Number,
    createdAt: String,
    
});

// Model
module.exports = model("Teacher" , teacherSchema);
