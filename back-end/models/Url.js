import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
  {
    longUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Url = mongoose.model("Url", urlSchema);

export default Url;
