import mongoose, { Mongoose, Model } from "mongoose";
import { File } from "types/schemas";
const collectionName = "file-upload"

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: String,
  size: Number
});
export const getFileModel = (mongoose: Mongoose): Model<File> => {
  const file = mongoose.model<File>("user", fileSchema, collectionName);
  return file
}

