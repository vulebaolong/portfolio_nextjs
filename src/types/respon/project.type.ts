import { ObjectId } from "mongoose";

export type TProject = {
   _id: ObjectId;
   title: string;
   description: string;
   type: string;
   platform: string;
   img_project_name: string;
   img_logo_name: string;
   createdAt: string;
   updatedAt: string;
   __v: number;
};
export type TPayloadProject = {
   title: string;
   description: string;
   type: string;
   platform: string;
   img_project_name: string;
   img_logo_name: string;
};
