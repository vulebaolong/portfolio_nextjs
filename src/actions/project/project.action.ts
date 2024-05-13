"use server";

import { responAction } from "@/helpers/function.helper";
import MongooseClient from "@/libs/mongodb";
import Projects from "@/models/project.model";

export const getProjectsAction = async (): Promise<TResonAction<TProject[]>> => {
   try {
      await MongooseClient();

      const projects = await Projects.find().lean();

      return responAction(true, projects as any);
   } catch (error: any) {
      return responAction(false, error);
   }
};
