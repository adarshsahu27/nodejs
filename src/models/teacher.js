const { Schema, model} = require("mongoose");
//Teacher Schema

const teacherSchema= new Schema({
    name: String,      // String is shorthand for {type: String}
    gender: String,
    email: {
        type: String,
        unique: true,
    },
    teacherID: {
        type: Number,
        unique: true,
    },
    salary: Number,
    standard: [String],
    contactNumber:{
        type: Number,
        unique: true,
    },
    vaccinated: Boolean,
    address: String,
    state: String,
    pincode: Number,
    createdAt: String,
    
});

// Model
module.exports = model("Teacher" , teacherSchema);
