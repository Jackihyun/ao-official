import express from "express";
import authAdmin from "../controllers/authController.js";

const router = express.Router();

router.route("/admin")
      .post(authAdmin);

export default router;
