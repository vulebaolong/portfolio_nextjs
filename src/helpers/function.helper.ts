export const checkClient = () => typeof window !== "undefined";

export const wait = function (miliseconds: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, miliseconds);
  });
};

export const responAction = <T>(status: boolean, data: T): TResonAction<T> => {
  return { status, data };
};
