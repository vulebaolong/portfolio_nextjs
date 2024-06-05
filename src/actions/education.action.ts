"use server"

import { responAction } from "@/helpers/function.helper";
import MongooseClient from "@/libs/mongodb.lib";
import Educations from "@/models/educations.model";
import { TEducation, TEducationCreate } from "@/types/respon/education.type";
import { revalidatePath } from "next/cache";

export const getEducationAction = async (): Promise<TResonAction<TEducation[] | null>> => {
   try {
      await MongooseClient();

      const textInPage = await Educations.find().lean();

      return responAction(true, textInPage as any, `successfuly`);
   } catch (error: any) {
      console.log(error);

      return responAction(false, null, error.message);
   }
};

export const createEducationAction = async (
   payload: TEducationCreate,
   finallyCb?: () => void
): Promise<TResonAction<TEducation | null>> => {
   try {
      await MongooseClient();

      const newProjects = await Educations.create(payload);

      revalidatePath(`/`);

      return responAction(true, newProjects as any, `Create education successfuly`);
   } catch (error: any) {
      console.log(error);
      return responAction(false, null, error.message);
   } finally {
      if (finallyCb) {
         finallyCb();
      }
   }
};