import express from "express";
import Url from "../models/Url.js";

const router = express.Router();

router.get("/:hashedValue", async (req, res) => {
  const { hashedValue } = req.params;

  try {
    const url = await Url.findOne({ shortUrl: hashedValue });

    if (url) {
      res.redirect(url.longUrl);
    } else {
      res.status(404).send("URL not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
