// const mongoose = require("mongoose");
import mongoose from "mongoose";

export const connection = async () => {
  try {
    //mongoose.set("debug", true);
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(process.env.MONGO_DB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
