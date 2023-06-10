import mongoose from "mongoose";

const InternSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    fullName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
    gender: {
        type: String,
        enum: ["male", "female","others"]
    },  
    dob: {
      type: String,
      required: true,
    },
    contact: {
        type: String,
        required: true,
        min: 10,
    },
    state: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    city_town: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    region: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
  
  
  
    address: {
        type: String,
        required: true,
        min: 2,
        max: 100,
    },
    clg_name:{
        type: String,
        required: true,
    },
    education:{
        type: String,
        required: true,
    },
    
    about_you: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

const Intern = mongoose.model("User", InternSchema);
export default Intern;
