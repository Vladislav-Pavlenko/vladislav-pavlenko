import mongoose from "mongoose";
import { env } from "../utils/env";

export const initMongoConnect = async () => {
  try {
    const user = env("MONGODB_USER");
    const pwd = env("MONGODB_PASSWORD");
    const url = env("MONGODB_URL");
    const db = env("MONGODB_DB");

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=My-contacts`
    );
    console.log("Mongo connection successfully established!");
  } catch (error) {
    console.log("Error while setting up mongo connection", error);
    throw error;
  }
};
