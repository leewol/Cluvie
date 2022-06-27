import express from "express";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
import handlebars from "handlebars";
import fs from "fs";

const mailSender = process.env.MAIL_SENDER;
const password = process.env.MAIL_PASSWORD;

const authRouter = express.Router();

const readHTMLFile = function (path, callback) {
  fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
    if (err) {
      callback(err);
      throw err;
    } else {
      callback(null, html);
    }
  });
};

// 클럽 사진 서버에 업로드
authRouter.post("/mail", async (req, res) => {
  const email = req.body.email;
  // 이메일 전송 옵션 설정
  const transport = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: mailSender,
        pass: password,
      },
    })
  );

  const mailOptions = {
    from: "cluvie@gmail.com",
    to: email,
    subject: "[cluvie] 회원가입 인증메일 입니다.",
    html: ``,
  };
});

module.exports = authRouter;
