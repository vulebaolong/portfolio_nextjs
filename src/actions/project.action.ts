"use server";

import { ROUTER } from "@/constants/router.constant";
import { responAction } from "@/helpers/function.helper";
import MongooseClient from "@/libs/mongodb.lib";
import Projects from "@/models/project.model";
import { TPayloadProject, TProject } from "@/types/respon/project.type";
import { ObjectId } from "mongoose";
import { revalidatePath } from "next/cache";

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
   payload: TPayloadProject
): Promise<TResonAction<TProject[] | null>> => {
   try {
      await MongooseClient();

      const newProjects = await Projects.create(payload);

      revalidatePath(`${ROUTER.PROJECT}`);
      revalidatePath(`${ROUTER.ADMIN.MY_PROJECT}`);

      return responAction(true, newProjects as any, `Create project successfuly`);
   } catch (error: any) {
      console.log(error);
      return responAction(false, null, error.message);
   }
};

export const deleteProject = async (projectId: ObjectId): Promise<TResonAction<null>> => {
   try {
      await MongooseClient();

      const deleteResult = await Projects.deleteOne({ _id: projectId });
      if (deleteResult.deletedCount === 0) throw new Error(`Delete failed`);

      revalidatePath(`${ROUTER.PROJECT}`);
      revalidatePath(`${ROUTER.ADMIN.MY_PROJECT}`);

      return responAction(true, null, `Delete project successfuly`);
   } catch (error: any) {
      console.log(error);
      return responAction(false, null, error.message);
   }
};
