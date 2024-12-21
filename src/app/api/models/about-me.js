import { model, models, Schema } from "mongoose";
import { handleSaveError, setUpdateOptions } from "./hooks";

// Створення схеми
const aboutMeSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    folder: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false, collection: "about-me" }
);

aboutMeSchema.post("save", handleSaveError);
aboutMeSchema.pre("findOneAndUpdate", setUpdateOptions);

const AboutMeCollection =
  models["about-me"] || model("about-me", aboutMeSchema);

export { AboutMeCollection };
