import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    amount: {
      type: String,
      required: true,
      min: 2,
      max: 5,
    },
    cause: [{
      type: String,
    }],
    enrolled_users: {
      type: Number
    }
      
  },
  { timestamps: true }
);

const Campaign = mongoose.model("CampaignSchema", CampaignSchema);
export default Campaign;
