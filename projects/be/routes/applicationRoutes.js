import express from "express";
import { postApplication } from "../controllers/applicationController.js";

const router = express.Router();

router.route("/")
      .post(postApplication)

export default router;
