import mongoose from "mongoose";

const OrientationSchema = new mongoose.Schema(
  {
    time: {
      type: String,
      required: true,
    },
    campaign_name: {
        type: String,
        required: true,
    },
    
    
  },
  { timestamps: true }
);

const Orientation = mongoose.model("Orientation", OrientationSchema);
export default Orientation;
