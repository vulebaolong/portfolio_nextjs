"use server";

import { responAction } from "@/helpers/function.helper";
import { deleteToken } from "@/libs/auth.lib";

export const logoutAction = async () => {
   try {
      deleteToken();

      return responAction(true, null, `Logout Successfuly.`);
   } catch (err: any) {
      console.log(err);
      return responAction<null>(false, null, `Server error`);
   }
};
