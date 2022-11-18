import jwt from "jsonwebtoken";

const SECRET_KEY = "abc123";

export const signToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

export const validateToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};



