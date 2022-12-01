import { Router } from "express";
import * as middleware from "../middleware/middleware";

export const router = Router();

//Router to upload file
router.post("/uploadFile", middleware.uploadFile);
