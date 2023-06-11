import mongoose from "mongoose";

const FundingSchema = new mongoose.Schema(
  {
    intern_id: {
        type: String,
        required: true,
        unique: true,
    },
    transaction_id: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    name: {
        type: String,
    },

    money: {
        type: String,
        required: true,
        min: 2,
        max: 5,
    },
  },
  { timestamps: true }
);

const Funding = mongoose.model("Funding", FundingSchema);
export default Funding;