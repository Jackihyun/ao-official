import asyncHandler from "express-async-handler";
import Admin from "../models/adminModel.js";

const authAdmin = asyncHandler(async (req, res) => {
    try {
        const { name, pw } = req.body;
        const admin = await Admin.findOne({ name, pw });

        if (!admin) {
            res.status(401).json({ message: "인증 실패: 이름 또는 비밀번호가 잘못되었습니다." });
            return;
        }

        res.status(200).json();
    } catch (err) {
        console.log(err);
        res.status(500).json();
    }
});

export default authAdmin;
