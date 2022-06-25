import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import * as Api from "@/utils/api";
import { Club } from "@/utils/interface";

/*
* 해당 React Query 구조분해 없이 그냥 받아올 시 
* status, isLoading, isSuccess, isError, data, isFetching, error 등이 있음
*/

export function useAllClubList(options?: object) {
  return useQuery<AxiosResponse, AxiosError, Club[], string>(
    "allClubList", 
    () => Api.get("/clubs"),
    {
      select: ({ data }) => data?.result,
      ...options,
    }
  );
}