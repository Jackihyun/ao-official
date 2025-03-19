import mongoose from "mongoose";

// 스키마
const applicationSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNum: {
        type: String,
        required: true
    },
    aWord: {
        type: String,
        required: true
    },
    submitedAt: {
        type: Date,
        default: null
    }
});

const Application = mongoose.model("Application", applicationSchema);
export default Application;
