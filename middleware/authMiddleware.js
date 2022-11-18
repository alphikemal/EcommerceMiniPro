import { validateToken } from "../lib/jwt.js";

export const verifyToken = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "merchant unauthorized",
    });
  }

  try {
    token = token.split(" ")[1];

    const verifiedMerchant = validateToken(token);

    if (!verifiedMerchant) {
      return res.status(401).json({
        message: "unauthorized request",
      });
    }

    req.user = verifiedMerchant;

    next();
  } catch (error) {
    return res.status(500).json({
      message: "invalid token",
    });
  }
};

// module.exports = {
//   verifyToken,
// };

