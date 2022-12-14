const { Schema, model} = require("mongoose");
//Student Schema

const studentSchema= new Schema({
    name: String,       // String is shorthand for {type: String}
    gender: String,
    email: {
        type: String,
        unique: true,
    },
    dob: Date,
    standard: String,
    rollNumber: String,
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
module.exports = model("Student" , studentSchema);
