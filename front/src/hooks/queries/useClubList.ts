import { useQuery, useInfiniteQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import * as Api from "@/utils/api";
import { Club } from "@/utils/interface";

/*
* 해당 React Query 구조분해 없이 그냥 받아올 시 
* status, isLoading, isSuccess, isError, data, isFetching, error 등이 있음
*/

// 전체 클럽 리스트 불러오기
export function useAllClubList(options?: object) {
  return useQuery<AxiosResponse, AxiosError, Club[], string[]>(
    ["allClubList"], 
    () => Api.get("/clubs"),
    {
      select: ({ data }) => data?.result,
      ...options,
    }
  );
}

// 무한 스크롤 위해서 6개씩 클럽 리스트 불러오기
export function useScrollClubList() {
  return useInfiniteQuery(
    // QueryKey
    ["scrollClubList"], 
    // QueryFn
    ({ pageParam = 0 }) => Api.get("/clubs/scrollClublist", pageParam),
    // QueryOptions
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextId = lastPage.data.scrollClublist.length - 1;
        return nextId === 5 && lastPage.data.scrollClublist[nextId].id;
      },
    }
  );
}