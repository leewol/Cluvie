// import express from "express";
// import Club from "../../../models/club";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// class club_service {
//   static async create_club({
//     name,
//     intro,
//     day,
//     description,
//     num,
//     process,
//     start_date,
//     end_date,
//   }) {
//     const club = await Club.findOne({ name: name });
//     if (club) {
//       const error_message =
//         "이 클럽명은 현재 사용중입니다. 다른 클럽명을 입력해주세요.";
//       return { error_message };
//     }
//     const new_club = {
//       name,
//       intro,
//       day,
//       description,
//       num,
//       process,
//       start_date,
//       end_date,
//       views: 0,
//     };
//     const created_new_club = await Club.create({ new_club });
//     created_new_club.error_message = null;

//     return created_new_club;
//   }
// }
// module.exports = club_service;
