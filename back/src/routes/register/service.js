import Users from "../../../models/user";
import { hashPassword } from "../../utils/hashPassword";

class registerService {
  static register = async ({ email, password, nickname, birthday, sex }) => {
    const hashedPassword = hashPassword(password);
    const duplicate = await Users.findOne({
      where: { email },
    });
    if (duplicate) {
      const errorMessage = "중복된 이메일 입니다";
      return { errorMessage };
    } else {
      const user = await Users.create({
        email,
        password: hashedPassword,
        nickname,
        birthday,
        sex,
      });
      return user;
    }
  };
}

export { registerService };
