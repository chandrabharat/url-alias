import mongoose from "mongoose";

const counterSchema = mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
});

const Counter = mongoose.model("Counter", counterSchema);

export default Counter;
