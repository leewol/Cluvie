import React from "react";

import { useAllClubList } from "@/hooks/queries/useClubList";

function ReactQueryTest() {
  const { isLoading, data } = useAllClubList();
  const resClubList = data ?? [];

  return <div>
    {resClubList.map((el: any) => <p key={el.id}>{el.intro}</p>)}
  </div>;
}

export default ReactQueryTest;