import multer from "multer";
import multerS3 from "multer-S3";
import aws from "aws-sdk";
import path from "path";
aws.config.loadFromPath(__dirname + "../../config/s3.json");

const s3 = new aws.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "cluvie",
    acl: "publice-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
});
module.exports = upload;
