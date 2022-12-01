import multer from "multer";
import { Request, Response } from "express";

//file size

const maxSize = 1000000;
//multer storage

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./new_file");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

//multer upload

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/tiff") {
      cb(null, true);
    } else {
      cb(null, false);
      return new Error("only png or tiff file allowed");
    }
  },
  limits: { fileSize: maxSize },
}).single("path");

//
const uploadFile = (req: Request, res: Response) => {
  try {
    console.log(req.file);
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        //A multer error Occurred  when uploading
        res.send(err);
      } else if (err) {
        //A unknown error occurred when uploading
        res.send(err);
      }
    });
  } catch (error) {}
};

export { uploadFile };
