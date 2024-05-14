"use server";

import { fetchCustom } from "@/common/fetch/fetchCustom";
import { ENDPOINT_GITHUB } from "@/constants/endpoint.constant";
import { responAction } from "@/helpers/function.helper";

export const getInfoGitHubAction = async (): Promise<TResonAction<TInfoGitHub> | TResonAction<any>> => {
  try {
    const result = await fetchCustom<TInfoGitHub>({
      method: `GET`,
      url: ENDPOINT_GITHUB.INFO_GITHUB(),
      nextOption: {
        next: { tags: [`getInfoGitHubAction`] },
      },
    });
    
    return responAction(true, result);
  } catch (error: any) {
    return responAction(false, error);
  }
};
