"use server";

import { responAction } from "@/helpers/function.helper";
import MongooseClient from "@/libs/mongodb";
import Users from "@/models/users.model";
import bcryptjs from "bcryptjs";
import _ from "lodash";

type TPayload = {
   email: string;
   password: string;
};

export const loginAction = async (payload: TPayload): Promise<TResonAction<TProject[] | null>> => {
   try {
      await MongooseClient();

      const { email, password } = payload;

      const exitsUser = await Users.findOne({ email });
      if (!exitsUser) throw new Error(`User not registered`);

      const match = bcryptjs.compareSync(password, exitsUser.password);
      if (!match) throw new Error(`Email or password is incorrect`);

      return responAction(
         true,
         _.pick(exitsUser, [`_id`, `name`, `email`, `createdAt`, `updatedAt`]) as any,
         `Login Successfuly.`
      );
   } catch (error: any) {
      console.log(error.message);
      return responAction<null>(false, null, error.message);
   }
};
