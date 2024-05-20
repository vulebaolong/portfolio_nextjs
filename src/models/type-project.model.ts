import mongoose from "mongoose";

const DOCUMENT_NAME = "TypeProject";
const COLLECTION_NAME = "TypeProjects";

// Custom validator function to check if platform array contains only one of the specified values
const typeProjectSchema = new mongoose.Schema(
   {
      type: { type: String, required: true },
   },
   {
      timestamps: true,
      collection: COLLECTION_NAME,
   }
);

// Export the model
const TypeProjects =
   mongoose.models[`${DOCUMENT_NAME}`] || mongoose.model(DOCUMENT_NAME, typeProjectSchema);

export default TypeProjects;
