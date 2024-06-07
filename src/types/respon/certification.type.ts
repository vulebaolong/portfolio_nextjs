import { ObjectId } from "mongoose";

export type TCertification = {
   _id: ObjectId;
   title: string;
   link: string;
   date: string;
};

export type TCertificationCreate = Omit<TCertification, `_id`>;
