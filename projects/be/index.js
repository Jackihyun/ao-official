import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// ES module에서 현재 경로 지정하는 방법
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// dotenv 설정
dotenv.config({ path: path.join(__dirname, ".env") });

import express from "express";
import dbConnect from "./config/dbConnect.js";
import cors from "cors";

//서버
const server = express();

server.use(cors());

//db연결
dbConnect();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//apply
import applicationRoutes from "./routes/applicationRoutes.js";
import applicationsRoutes from "./routes/applicationsRoutes.js";
import authRoutes from "./routes/authRoutes.js";
server.use("/api/application", applicationRoutes);
server.use("/api/applications", applicationsRoutes);
server.use("/api/auth", authRoutes);

server.listen(4000, () => {
  console.log("서버 실행 중");
});
