"use server";

import { responAction } from "@/helpers/function.helper";
import MongooseClient from "@/libs/mongodb.lib";
import Projects from "@/models/project.model";

export const getProjectsAction = async (): Promise<TResonAction<TProject[] | null>> => {
   try {
      await MongooseClient();

      const projects = await Projects.find().lean();

      return responAction(true, projects as any, `successfuly`);
   } catch (error: any) {
      return responAction(false, null, error.message);
   }
};

export const createProjectAction = async (
   payload: any
): Promise<TResonAction<TProject[] | null>> => {
   const { title, description, platform, type, img_project_path, img_logo_path } = payload;
   try {
      await MongooseClient();

      console.log({ title, description, platform });

      const newProjects = await Projects.create({
         title,
         description,
         platform,
         type,
         img_project_path,
         img_logo_path,
      });

      return responAction(true, newProjects as any, `Create project successfuly`);
   } catch (error: any) {
      console.log(error);
      return responAction(false, null, error.message);
   }
};
