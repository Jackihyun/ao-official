import asyncHandler from "express-async-handler";
import Application from "../models/applicationModel.js"; // 지원자 모델

// /apply에 post 요청
export const postApplication = asyncHandler(async (req, res) => {
    try {
        // 바디에서 정보 받기
        const { id, name, phoneNum, aWord } = req.body;
        console.log(req.body);

        let errors = {}; // 에러 객체

        // 1. 공백 검사
        if (!id.trim()) {
            errors.stuIdErrorMessage = "학번을 입력해 주세요.";
        }
        if (!name.trim()) {
            errors.nameErrorMessage = "이름을 입력해 주세요.";
        }
        if (!phoneNum.trim()) {
            errors.phoneNumErrorMessage = "전화번호를 입력해 주세요.";
        }
        if (!aWord.trim()) {
            errors.aWordErrorMessage = "한마디를 입력해 주세요.";
        }

        // 2. 길이 및 타입 검사
        if (id.length !== 8 || isNaN(Number(id))) {
            errors.stuIdErrorMessage = "학번을 확인해 주세요.";
        }
        if (!/^(\d{3}-?\d{3,4}-?\d{4})$/.test(phoneNum)) {
            errors.phoneNumErrorMessage = "전화번호를 확인해 주세요.";
        }

        // 중복지원 확인
        // 학번 중복 확인
        const existingApplyerWithId = await Application.findOne({ id });
        if (existingApplyerWithId) {
            errors.stuIdErrorMessage = "중복된 학번입니다.";
        }

        // 전화번호 중복 확인
        const existingApplyerWithPhoneNum = await Application.findOne({ phoneNum });
        if (existingApplyerWithPhoneNum) {
            errors.phoneNumErrorMessage = "중복된 전화번호입니다.";
        }


        // 에러가 하나라도 존재하면 400 반환
        if (Object.keys(errors).length !== 0) {
            return res.status(400).json(errors);
        }

        // DB에 저장
        const applyer = await Application.create({
            id, name, phoneNum, aWord, submitedAt: Date.now()
        });

        // 성공시 200 반환
        res.status(200).json({ message: "지원이 완료되었습니다." });
    } catch (err) {
        console.log(err);
        res.status(500).json({ serverErrorMessage: "서버 오류입니다." });
    }
});
