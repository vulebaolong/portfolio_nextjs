import _ from "lodash";

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

