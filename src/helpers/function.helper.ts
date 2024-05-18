import _ from "lodash";
import { customAlphabet } from "nanoid";

export const checkClient = () => typeof window !== "undefined";

export const wait = function (miliseconds: number) {
   return new Promise(function (resolve) {
      setTimeout(resolve, miliseconds);
   });
};

export const jsonParse = (data: any) => {
   return JSON.parse(JSON.stringify(data));
};

export const responAction = <T>(
   status: boolean,
   data: T | null,
   message: string = ``
): TResonAction<T | null> => {
   return jsonParse({ status, data, message });
};

type TGetInfoData = {
   fields: string[];
   object: object;
};

/**
 * Extracts specified fields from an object.
 *
 * @param {TGetInfoData} params - An object containing fields and object to extract data from.
 * @returns {object} - A new object containing only the specified fields from the original object.
 */
export const getInfoData = ({ fields = [], object = {} }: TGetInfoData): object => {
   return _.pick(object, fields);
};

export const isExtImage = (file: File): boolean => {
   // Mảng chứa các đuôi file hình ảnh hợp lệ
   const validImageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "tiff", "ico"];

   // Lấy đuôi file từ tên file
   const fileExtension = file.name.split(".").pop()?.toLowerCase();

   // Kiểm tra đuôi file có nằm trong danh sách đuôi file hợp lệ hay không
   if (fileExtension && validImageExtensions.includes(fileExtension)) {
      return true;
   }

   return false;
};

export const isFileSizeValid = (file: File, maxSizeInMB: number = 1): boolean => {
   const maxSizeInBytes = maxSizeInMB * 1024 * 1024; // Chuyển đổi MB sang byte
   return file.size <= maxSizeInBytes;
};

export const generateId = (length: number): string => {
   const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const nanoid = customAlphabet(alphabet, length);
   return nanoid();
};
