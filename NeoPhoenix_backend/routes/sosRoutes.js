import express from "express";
const router = express.Router();
import { sendSOS } from "../controllers/sosController.js";

router.post("/sos", sendSOS);

export default router;
