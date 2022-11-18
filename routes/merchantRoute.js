import express from "express";
import { merchantController } from "../controllers/index.js";

const router = express.Router();

router.post("/register", merchantController.register);
router.get("/delete", merchantController.delete);

export default router;
