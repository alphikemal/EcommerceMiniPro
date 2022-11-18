import express from "express";
import { productController } from "../controllers/index.js";

const router = express.Router();

router.post("/register", productController.register);
router.get('/update/:id', productController.edit);
router.post('/update/:id', productController.update);
router.get('/delete/:id', productController.delete);


export default router;
