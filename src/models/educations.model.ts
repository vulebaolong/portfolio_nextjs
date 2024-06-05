import mongoose from "mongoose";

const DOCUMENT_NAME = "Education";
const COLLECTION_NAME = "Educations";

const educationsSchema = new mongoose.Schema(
   {
      title: { type: String, required: true },
      description: { type: String, required: true, unique: true },
   },
   {
      timestamps: true,
      collection: COLLECTION_NAME,
   }
);

// Export the model
const Educations =
   mongoose.models[`${DOCUMENT_NAME}`] || mongoose.model(DOCUMENT_NAME, educationsSchema);

export default Educations;
