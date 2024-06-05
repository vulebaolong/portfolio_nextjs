import { ObjectId } from "mongoose";

export type TEducation = {
   _id: ObjectId;
   title: string;
   description: string;
};
export type TEducationCreate = Omit<TEducation, "_id">