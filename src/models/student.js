const { Schema, model} = require("mongoose");
//Student Schema

const studentSchema= new Schema({
    name: String,       // String is shorthand for {type: String}
    gender: String,
    email: {
        type: String,
        unique: true,
    },
    // dob: Date,
    standard: String,
    rollNumber: {
        type: String,
        unique: true,
    },
    contactNumber:{
        type: Number,
        unique: true,
    },
    createdAt: String,
    // address: String,
});

// Model
module.exports = model("Student" , studentSchema);
