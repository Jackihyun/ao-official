import express from "express";
import { fetchApplications } from "../controllers/applicationsController.js";

const router = express.Router();

router.route("/")
      .post(fetchApplications);

export default router;
