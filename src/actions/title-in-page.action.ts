"use server";

import { ROUTER } from "@/constants/router.constant";
import { responAction } from "@/helpers/function.helper";
import MongooseClient from "@/libs/mongodb.lib";
import Projects from "@/models/project.model";
import TextInPages from "@/models/text-in-page.model";
import {
   TPayloadEditProject,
   TProject
} from "@/types/respon/project.type";
import { TTextInPage } from "@/types/respon/text-in-page.type";
import { revalidatePath } from "next/cache";

export const getTextInPageAction = async (): Promise<TResonAction<TTextInPage[] | null>> => {
   try {
      await MongooseClient();

      const textInPage = await TextInPages.find().lean();

      return responAction(true, textInPage as any, `successfuly`);
   } catch (error: any) {
      console.log(error);

      return responAction(false, null, error.message);
   }
};

export const updateProjectAction = async (
   payload: TPayloadEditProject,
   finallyCb?: () => void
): Promise<TResonAction<TProject[] | null>> => {
   try {
      await MongooseClient();

      const updateProjects = await Projects.updateOne({ _id: payload._id }, payload);

      revalidatePath(`${ROUTER.PROJECT}`);
      revalidatePath(`${ROUTER.ADMIN.MY_PROJECT}`);

      return responAction(true, updateProjects as any, `Update project successfuly`);
   } catch (error: any) {
      console.log(error);
      return responAction(false, null, error.message);
   } finally {
      if (finallyCb) {
         finallyCb();
      }
   }
};
