import express from "express";
import { createURL, getAllURL } from "../controllers/Url.js";

const router = express.Router();

router.get("/", getAllURL);
router.post("/createUrl", createURL);

export default router;
