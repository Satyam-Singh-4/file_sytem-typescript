import express from "express";
import * as middleware from "../middleware/middleware";
const router = express.Router();

//Router to upload file
router.post("/uploadFile", middleware.uploadFile);

export { router };
