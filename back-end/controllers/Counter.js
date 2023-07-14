import Counter from "../models/Counter.js";

export const incrementCounter = async () => {
  try {
    let counterVal = await Counter.findOne();

    if (counterVal) {
      counterVal.value++;
    } else {
      counterVal = new Counter({ value: 1 });
    }

    await counterVal.save();

    return counterVal;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCounter = async () => {
  try {
    let counterVal = await Counter.findOne();

    if (!counterVal) {
      counterVal = await incrementCounter();
    }

    return counterVal.value;
  } catch (error) {
    throw new Error("Could not get Counter");
  }
};
