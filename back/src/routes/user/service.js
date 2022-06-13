import User from "../../../models/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

class userService {
  static createToken = async (req, res, next) => {
    try {
      const user = await User.find(req.body.user);

      if (user.length) {
        const token = jwt.sign(
          {
            user_id: user[0].user_id,
          },
          SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );
        res.cookie("user", token);
        res.status(200).json({ success: true, token });
      } else {
        res.status(404).json({ error: "유효하지 않은 사용자입니다." });
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  };
}

export { userService };
