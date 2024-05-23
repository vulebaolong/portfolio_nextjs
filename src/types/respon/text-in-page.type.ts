import { ObjectId } from "mongoose";

export type TTextInPage = {
   _id: ObjectId;
   page: string;
   title: string;
   description: string;
};
export type TTextInPageCreate = {
   page: string;
   title: string;
   description: string;
};
