import express from "express";
import Club from "../../../models/club";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import club_service from "./service";

const clubRouter = express.Router();

clubRouter.post("/clubs", async (req, res) => {
  const club = {
    name: req.body.name,
    intro: req.body.intro,
    day: req.body.day,
    description: req.body.description,
    num: req.body.num,
    process: req.body.process,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    views: 0,
  };
  const new_club = await Club.create(club)
    .then((result) => {
      res.status(200).json({ success: true, result });
    })
    .catch((err) => {
      res.json({ success: false, err });
    });
});

// clubRouter.get("/clubs", async (req, res) => {
//   const clubs = await Club.findAll();
// });
module.exports = clubRouter;
