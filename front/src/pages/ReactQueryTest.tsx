import React, { useEffect, useState } from "react";

import { Club } from "@/utils/interface";
import { useAllClubList, useScrollClubList, useCreateClub } from "@/hooks/queries/useClubList";

import { ColumnContainerBox } from "@/styles/containers";

function ReactQueryTest() {
  const [clubInfo, setClubInfo] = useState<Club>({
    name: "테스트입니다4",
    manager: 4,
    picture: "1",
    intro: "같은 파일 내 테스트4",
    duration: 0,
    state: 0,
    online: 0,
    offline: 0,
    description: '상세보기를 작성해주세요',
    views: 0,
    head_count: 1,
    weekday: 0,
    weekend: 0,
    hashtags: ""
  });
  const res = useAllClubList();
  const resClubList = res.data ?? [];
  const { mutate } = useCreateClub("allClubList");

  const handleSubmit = () => {
    mutate(clubInfo, {
      onSuccess: () => {
        console.log("클럽 생성 성공");
      }
    });
  }

  // console.log(res.data);

  return <ColumnContainerBox>
    <button type="button" onClick={handleSubmit}>add</button>
    {resClubList.map((el: any) => <p key={el.id}>{el.intro}</p>)}
    {/* <button type="button" onClick={() => get.hasNextPage && get.fetchNextPage()}>Next</button> */}
  </ColumnContainerBox>;
}

export default ReactQueryTest;