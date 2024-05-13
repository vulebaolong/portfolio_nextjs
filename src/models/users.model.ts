import mongoose from "mongoose";

const DOCUMENT_NAME = "User";
const COLLECTION_NAME = "Users";

const usersSchema = new mongoose.Schema(
   {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
   },
   {
      timestamps: true,
      collection: COLLECTION_NAME,
   }
);

// Export the model
const Users =
   mongoose.models[`${DOCUMENT_NAME}`] || mongoose.model(DOCUMENT_NAME, usersSchema);

export default Users;
