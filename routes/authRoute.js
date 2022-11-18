import express from "express";
import { authController } from "../controllers/index.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// router.post(
//     "/register",
//     body("name", "name has to be 8 chars")
//       .isLength({ min: 3 })
//       .isAlphanumeric(),
//     body("addres").isAddres(),
//     body("password").isStrongPassword({
//       minLength: 8,
//       minNumbers: 1,
//       minUppercase: 1,
//       minSymbols: 1,
//       minLowercase: 1,
//     }),
//     authController.registerMerchant
//   );

router.post("/login", authController.login);
router.get("/refresh-token", verifyToken, authController.refreshToken);
router.patch("/me", verifyToken, authController.edit);

export default router;
