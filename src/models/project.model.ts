import mongoose from "mongoose";

const DOCUMENT_NAME = "Project";
const COLLECTION_NAME = "Projects";

// Custom validator function to check if platform array contains only one of the specified values
const projectSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      type: {
         type: [String],
         required: true,
         enum: ["Fe Development", "Be Development"],
      },
      platform: {
         type: String,
         required: true,
      },
      img_project_path: {
         type: String,
         required: true,
      },
      img_logo_path: {
         type: String,
         required: true,
      },
   },
   {
      timestamps: true,
      collection: COLLECTION_NAME,
   }
);

// Export the model
const Projects =
   mongoose.models[`${DOCUMENT_NAME}`] || mongoose.model(DOCUMENT_NAME, projectSchema);

export default Projects;
