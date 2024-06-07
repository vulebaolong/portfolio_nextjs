import mongoose from "mongoose";

const DOCUMENT_NAME = "Certification";
const COLLECTION_NAME = "Certifications";

const certificationSchema = new mongoose.Schema(
   {
      title: { type: String, required: true, unique: true },
      date: { type: Date, required: true },
      link: { type: String, required: true },
   },
   {
      timestamps: true,
      collection: COLLECTION_NAME,
   }
);

// Export the model
const Certifications =
   mongoose.models[`${DOCUMENT_NAME}`] || mongoose.model(DOCUMENT_NAME, certificationSchema);

export default Certifications;
