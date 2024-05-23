import mongoose from "mongoose";

const DOCUMENT_NAME = "TextInPage";
const COLLECTION_NAME = "TextInPages";

const textInPagesSchema = new mongoose.Schema(
   {
      page: { type: String, required: true },
      title: { type: String, required: true, unique: true },
      description: { type: String, required: true },
   },
   {
      timestamps: true,
      collection: COLLECTION_NAME,
   }
);

// Export the model
const TextInPages =
   mongoose.models[`${DOCUMENT_NAME}`] || mongoose.model(DOCUMENT_NAME, textInPagesSchema);

export default TextInPages;
