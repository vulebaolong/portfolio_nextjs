import { ObjectId } from "mongoose";

export type TProject = {
   _id: ObjectId;
   title: string;
   description: string;
   type: string;
   platform: string;
   img_project_path: string;
   img_logo_path: string;
};
