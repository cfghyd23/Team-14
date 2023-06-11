import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    transaction_id: {
      type: Array,
      default: []
    },
    campaign_id: {
      type: Array,
      default: []
    },
    intern_id: {
        type: Array,
        default: []
    },
      },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;