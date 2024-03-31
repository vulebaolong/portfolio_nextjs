type TFunction = () => void;
type TUnionFunction = (e: any) => void;

export type ErrorFunctionType = TFunction | TUnionFunction;
export type SuccessFunctionType = TFunction | TUnionFunction;
export type FinallyFunctionType = TFunction;

type IRequest = {
  url: string;
  method: string;
  body?: { [key: string]: any };
  headers?: object;
  nextOption?: RequestInit;
  formData?: boolean;

  successCallback?: SuccessFunctionType;
  errorCallback?: ErrorFunctionType;
  finallyCallback?: FinallyFunctionType;
};

export const fetchCustom = async <T>(props: IRequest) => {
  let {
    url,
    method,
    body,
    headers = {},
    nextOption = {},
    formData,
    successCallback = () => {},
    errorCallback = () => {},
    finallyCallback = () => {},
  } = props;

  const options: RequestInit = {
    method: method,
    headers: new Headers({
      "Content-type": formData
        ? "multipart/form-data; boundary=<calculated when request is sent>"
        : "application/json",
      // Authorization: `Bearer ${session?.access_token}`,
      ...headers,
    }),
    body: body ? JSON.stringify(body) : null,
    ...nextOption,
  };

  try {
    const res = await fetch(`${url}`, options);

    successCallback(res);

    return (await res.json()) as T;
  } catch (error) {
    console.error("Error (fetchCustom):", error);
    errorCallback(error)
    throw error;
  } finally {
    finallyCallback()
  }
};
