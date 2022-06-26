import React, { useEffect } from "react";

import { useScrollClubList } from "@/hooks/queries/useClubList";

import { ContainerBox } from "@/styles/containers";

function ReactQueryTest() {
  // const { data } = useAllClubList();
  // const resClubList = data ?? [];
  const get = useScrollClubList();
  
  useEffect(() => console.log(get), [get]);

  return <ContainerBox>
    {/* {resClubList.map((el: any) => <p key={el.id}>{el.intro}</p>)} */}
    <button type="button" onClick={() => get.hasNextPage && get.fetchNextPage()}>Next</button>
  </ContainerBox>;
}

export default ReactQueryTest;