"use server"

import { responAction } from "@/helpers/function.helper";
import MongooseClient from "@/libs/mongodb.lib";
import Certifications from "@/models/certifications.model";
import Educations from "@/models/educations.model";
import { TCertification, TCertificationCreate } from "@/types/respon/certification.type";
import { TEducation, TEducationCreate } from "@/types/respon/education.type";
import { ObjectId } from "mongoose";
import { revalidatePath } from "next/cache";

export const getCertificationAction = async (): Promise<TResonAction<TCertification[] | null>> => {
   try {
      await MongooseClient();

      const certification = await Certifications.find().lean();

      return responAction(true, certification as any, `successfuly`);
   } catch (error: any) {
      console.log(error);

      return responAction(false, null, error.message);
   }
};

export const createCertificationAction = async (
   payload: TCertificationCreate,
   finallyCb?: () => void
): Promise<TResonAction<TCertification | null>> => {
   try {
      await MongooseClient();

      const newProjects = await Certifications.create(payload);

      revalidatePath(`/`);

      return responAction(true, newProjects as any, `Create certification successfuly`);
   } catch (error: any) {
      console.log(error);
      return responAction(false, null, error.message);
   } finally {
      if (finallyCb) {
         finallyCb();
      }
   }
};

export const deleteCertificationAction = async (
   certificationId: ObjectId
): Promise<TResonAction<null>> => {
   try {
      await MongooseClient();

      const deleteResult = await Certifications.deleteOne({ _id: certificationId });
      if (deleteResult.deletedCount === 0) throw new Error(`Delete failed`);

      revalidatePath(`/`);

      return responAction(true, null, `Delete Certificaiton successfuly`);
   } catch (error: any) {
      console.log(error);
      return responAction(false, null, error.message);
   }
};

export const updateCertificationAction = async (
   payload: TCertification,
   finallyCb?: () => void
): Promise<TResonAction<TEducation[] | null>> => {
   try {
      await MongooseClient();

      const updateCertification = await Certifications.updateOne({ _id: payload._id }, payload);

      console.log(`updateCertification`, updateCertification);

      revalidatePath(`/`);

      return responAction(true, updateCertification as any, `Update Certification successfuly`);
   } catch (error: any) {
      console.log(error);
      return responAction(false, null, error.message);
   } finally {
      if (finallyCb) {
         finallyCb();
      }
   }
};