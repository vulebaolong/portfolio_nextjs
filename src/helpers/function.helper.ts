export const checkClient = () => typeof window !== "undefined";

export const wait = function (miliseconds: number) {
    return new Promise(function (resolve) {
        setTimeout(resolve, miliseconds);
    });
};