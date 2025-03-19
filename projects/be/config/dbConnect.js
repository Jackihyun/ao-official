import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log("확인용 환경변수:", process.env.MONGODB_URI); // 👈 추가 (환경변수 출력)

const DB_CONNECT = process.env.DB_CONNECT;

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(DB_CONNECT);
    console.log("DB connected");
  } catch (err) {
    console.error(err);
  }
};

export default dbConnect;
