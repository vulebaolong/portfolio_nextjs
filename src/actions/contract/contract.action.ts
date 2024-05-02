"use server";

import { EmailTemplate } from "@/common/email-templates/EmailTemplate";
import { responAction } from "@/helpers/function.helper";
import { Resend } from "resend";
import nodemailer from "nodemailer";

//ceip jrrg rgzr ufeh

type TSendMailAction = {
   value: {
      name: string;
      email: string;
      message: string;
   };
};
export const sendMailAction = async ({ value }: TSendMailAction): Promise<any> => {
   try {
      let transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
            user: "vulebaolong@gmail.com",
            pass: "ceipjrrgrgzrufeh",
         },
      });
      let infoMail = {
         from: "vulebaolong@gmail.com",
         to: "vulebaolong@gmail.com",
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
      return responAction(false, error);
   }
};
