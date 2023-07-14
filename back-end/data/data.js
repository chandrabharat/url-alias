import Url from "../models/Url.js";
import Counter from "../models/Counter.js";

export const injectData = async () => {
  try {
    await Url.create({
      longUrl: "https://chat.openai.com/",
      shortUrl: "6B86B273FF34FCE1",
    });
    await Url.create({
      longUrl: "https://www.berkeley.edu/",
      shortUrl: "D4735E3A265E16EE",
    });
    await Url.create({
      longUrl: "https://neetcode.io/roadmap",
      shortUrl: "4E07408562BEDB8B",
    });
    await Url.create({
      longUrl: "https://www.chess.com/home",
      shortUrl: "30DDE57CC40B7933",
    });
    await Url.create({
      longUrl: "https://www.youtube.com/",
      shortUrl: "EF2D127DE37B942B",
    });
    await Url.create({
      longUrl: "https://www.reddit.com/",
      shortUrl: "E7F6C011776E8DB7",
    });
    await Url.create({
      longUrl: "https://developer.mozilla.org/en-US/",
      shortUrl: "7902699BE42C8A8E",
    });
    const existingCounter = await Counter.findOne();
    if (!existingCounter) {
      await Counter.create({ value: 8 });
    } else {
      await Counter.updateOne({}, { value: 8 });
    }
    return true;
  } catch (error) {
    console.error("Error injecting data:", error);
    return false;
  }
};

export const removeData = async () => {
  try {
    await Url.deleteMany();
    await Counter.deleteMany();
    return true;
  } catch (error) {
    console.error("Error removing data:", error);
    return false;
  }
};
