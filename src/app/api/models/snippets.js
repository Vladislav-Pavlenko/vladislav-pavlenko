import { model, models, Schema } from "mongoose";
import { handleSaveError, setUpdateOptions } from "./hooks";

const snippetSchema = new Schema(
  {
    id: { type: String },
    snippet: { type: String },
    stars: { type: Number },
    details: { type: String },
  },
  { timestamps: true, versionKey: false }
);

snippetSchema.post("save", handleSaveError);
snippetSchema.pre("findOneAndUpdate", setUpdateOptions);

const SnippetsCollection = models["snippet"] || model("snippet", snippetSchema);

export { SnippetsCollection };
