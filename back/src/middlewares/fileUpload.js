import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../../../front/public/uploads"); //업로드 된 파일을 어디다 저장하는지 ( 현재 파일의 경로 기준 )
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); //파일 이름을 어떻게 저장할지 정하는 것
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".png" && ext !== ".gif" && ext !== "jpeg") {
      // 사진파일만 받게
      return cb(
        res
          .status(403)
          .json({ success: false, message: "사진파일만 업로드 할 수 있습니다" })
      );
    }
    cb(null, true);
  },
});

module.exports = multer({ storage: storage }).single("file");
