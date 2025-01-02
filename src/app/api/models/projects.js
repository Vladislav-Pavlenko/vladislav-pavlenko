import { model, models, Schema } from "mongoose";
import { handleSaveError, setUpdateOptions } from "./hooks";

const projectsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    technology: {
      type: Array,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

projectsSchema.post("save", handleSaveError);
projectsSchema.pre("findOneAndUpdate", setUpdateOptions);

const ProjectsCollection =
  models["project"] || model("project", projectsSchema);

export { ProjectsCollection };
