import { cookies } from "next/headers";

const TOKEN_SECRET="vulebaolong"
const TOKEN_EXPIRES="20000" 

const expires = process.env.TOKEN_EXPIRES;

export const setToken = async (userId: string) => {
  cookies().set("token", userId, {
    expires: Date.now() + Number(TOKEN_EXPIRES),
  });
};

export const getToken = async () => {
  const sessionUserId = cookies().get("token");
  if (!sessionUserId) return null;
  return sessionUserId.value;
};

export const deleteToken = async () => {
  cookies().delete("token");
};
