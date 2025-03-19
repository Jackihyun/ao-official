import mongoose from "mongoose";

// 스키마
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pw: {
        type: String,
        required: true
    },
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
