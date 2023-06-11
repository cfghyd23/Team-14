import mongoose from "mongoose";

const InternSchema = new mongoose.Schema(
  {
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
      },
      password: {
          type: String, 
          required: true,
          min: 2,
      },
    // gender: {
    //     type: String,
    //     required: true,
    //     enum: ["male", "female","others"]
    // },  
    // dob: {
    //   type: String,
    //   required: true,
    // },
    // contact: {
    //     type: String,
    //     required: true,
    //     min: 10,
    // },
    // state: {
    //   type: String,
    //   required: true,
    //   min: 2,
    //   max: 100,
    // },
    // cityTown: {
    //   type: String,
    //   required: true,
    //   min: 2,
    //   max: 100,
    // },
    // region: {
    //   type: String,
    //   required: true,
    //   min: 2,
    //   max: 100,
    // },
    // address: {
    //     type: String,
    //     required: true,
    //     min: 2,
    //     max: 100,
    // },
    // collegeName:{
    //     type: String,
    //     required: true,
    // },
    // education:{
    //     type: String,
    //     required: true,
    // },

    // aboutYou: {
    //     type: String,
    //     required: true,
    // },
  },
  { timestamps: true }
);

const Intern = mongoose.model("Intern", InternSchema);
export default Intern;