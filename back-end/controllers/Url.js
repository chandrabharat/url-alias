import Url from "../models/Url.js";
import { incrementCounter, getCounter } from "./Counter.js";
import crypto from "crypto";

export const createURL = async (req, res) => {
  const { longUrl } = req.body;

  // Check if longUrl is a valid URL
  if (!isValidUrl(longUrl)) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  try {
    const existingURL = await Url.findOne({ longUrl });

    if (existingURL) {
      res
        .status(200)
        .json({ longUrl: existingURL.longUrl, shortUrl: existingURL.shortUrl });
    } else {
      const counterVal = await getCounter();

      const hash = crypto.createHash("sha256");
      hash.update(counterVal.toString());
      const hashedVal = hash.digest("hex").substring(0, 16);

      const newUrl = new Url({
        longUrl: longUrl,
        shortUrl: hashedVal,
      });

      newUrl.save();

      await incrementCounter();

      res.status(200).json(newUrl);
    }
  } catch (error) {
    res.status(500).json({ error: "Could not create URL" });
  }
};

export const getAllURL = async (req, res) => {
  try {
    const allUrl = await Url.find();
    res.status(200).json(allUrl);
  } catch (error) {
    res.status(500).json({ error: "Could not get all Url" });
  }
};

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};
