"use server";

import { getInfoData, responAction } from "@/helpers/function.helper";
import MongooseClient from "@/libs/mongodb.lib";
import Users from "@/models/users.model";
import { TProject } from "@/types/respon/project.type";
import bcryptjs from "bcryptjs";
import _ from "lodash";

type TPayload = {
   name: string;
   email: string;
   password: string;
};

export const registerAction = async (
   payload: TPayload
): Promise<TResonAction<TProject[] | null>> => {
   try {
      await MongooseClient();

      const exitsUser = await Users.findOne({ email: payload.email }).lean();
      console.log(exitsUser);
      if (exitsUser) throw new Error(`Error User Already Register`);

      const { password } = payload;

      const passwordHashed = await bcryptjs.hash(password, 0);

      const newUser = await Users.create({
         ...payload,
         password: passwordHashed,
      });

      return responAction(
         true,
         _.pick(newUser, [`_id`, `name`, `email`, `createdAt`, `updatedAt`]) as any,
         `Register Successfuly.`
      );
   } catch (error: any) {
      console.log(error.message);
      return responAction<null>(false, null, error.message);
   }
};
