"use server";

import { responAction } from "@/helpers/function.helper";
import MongooseClient from "@/libs/mongodb.lib";
import TextInPages from "@/models/text-in-page.model";
import { TTextInPage, TTextInPageCreate } from "@/types/respon/text-in-page.type";
import { ObjectId } from "mongoose";
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

export const getTextInPageByPageAction = async (
   page: string
): Promise<TResonAction<TTextInPage | null>> => {
   try {
      await MongooseClient();

      const textInPage = await TextInPages.findOne({ page: page }).lean();

      return responAction(true, textInPage as any, `successfuly`);
   } catch (error: any) {
      console.log(error);

      return responAction(false, null, error.message);
   }
};

export const createTextInPageAction = async (
   payload: TTextInPageCreate,
   finallyCb?: () => void
): Promise<TResonAction<TTextInPage | null>> => {
   try {
      await MongooseClient();

      const newProjects = await TextInPages.create(payload);

      revalidatePath(`/`);

      return responAction(true, newProjects as any, `Create text in page successfuly`);
   } catch (error: any) {
      console.log(error);
      return responAction(false, null, error.message);
   } finally {
      if (finallyCb) {
         finallyCb();
      }
   }
};

export const updateTextInPageAction = async (
   payload: TTextInPage,
   finallyCb?: () => void
): Promise<TResonAction<TTextInPage[] | null>> => {
   try {
      await MongooseClient();

      const updateProjects = await TextInPages.updateOne({ _id: payload._id }, payload);

      revalidatePath(`/`);

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

export const deleteTextInPageAction = async (
   textInPageId: ObjectId
): Promise<TResonAction<null>> => {
   try {
      await MongooseClient();

      const deleteResult = await TextInPages.deleteOne({ _id: textInPageId });
      if (deleteResult.deletedCount === 0) throw new Error(`Delete failed`);

      revalidatePath(`/`);

      return responAction(true, null, `Delete text in page successfuly`);
   } catch (error: any) {
      console.log(error);
      return responAction(false, null, error.message);
   }
};
