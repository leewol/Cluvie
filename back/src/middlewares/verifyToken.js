import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

const verifyToken = (req, res, next) => {
  try {
    const clientToken = req.cookies.user;
    const decoded = jwt.verify(clientToken, SECRET_KEY);

    if (decoded) {
      res.locals.userId = decoded.user_id;
      next();
    } else {
      res.status(404).json({ error: "unauthorized" });
    }
  } catch (err) {
    res.status(404).json({ error: "token expired" });
  }
};

export { verifyToken };
