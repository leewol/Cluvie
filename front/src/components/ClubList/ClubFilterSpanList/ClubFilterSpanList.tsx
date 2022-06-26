import React, { useState } from "react";

import { SelectedSpanBox, ResetSpan } from "./ClubFilterSpanListStyle";
import { SelectedSpan } from "@/styles/text";

function ClubFilterSpanList() {
  const [ checkedItems, setCheckedItems ] = useState<string[]>([]);

  const handleSpanClickDelete = (event: React.MouseEvent<HTMLSpanElement>) => {
    const clickedItem = event.currentTarget.id;
    setCheckedItems((prevArr) => { 
      return prevArr.filter((el) => el !== clickedItem);
    });
  }

  const handleFilterClear = () => {
    setCheckedItems([]);
  }

  return <SelectedSpanBox>
    {checkedItems.map((item) => <SelectedSpan id={item} key={item} onClick={handleSpanClickDelete}>{item}</SelectedSpan>)}
    {!!checkedItems.length && (<ResetSpan onClick={handleFilterClear}>필터 초기화</ResetSpan>)}
  </SelectedSpanBox>
}

export default ClubFilterSpanList;