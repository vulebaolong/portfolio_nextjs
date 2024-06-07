"use server";

import { responAction } from "@/helpers/function.helper";
import nodemailer from "nodemailer";

type TSendMailAction = {
   value: {
      name: string;
      email: string;
      message: string;
   };
   emailMe: string;
};
export const sendMailAction = async ({ value, emailMe }: TSendMailAction): Promise<TResonAction<any>> => {
   console.log(process.env.APP_PASSWORD_GOOGLE);
   try {
      let transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
            user: emailMe,
            pass: process.env.APP_PASSWORD_GOOGLE,
         },
      });
      let infoMail = {
         from: emailMe,
         to: emailMe,
         subject: `Portfolio - ${value.email}`,
         // text: text,
         html: `
         <p>
            <strong>Name: </strong>
            <span>${value.name}</span>
         </p>
         <p>
            <strong>Email: </strong>
            <span>${value.email}</span>
         </p>
         <p>
            <strong>Message: </strong>
            <span>${value.message}</span>
         </p>
         `,
      };

      const data = await transporter.sendMail(infoMail);

      return responAction(true, data);
   } catch (error: any) {
      console.log(error);
      return responAction(false, error);
   }
};
