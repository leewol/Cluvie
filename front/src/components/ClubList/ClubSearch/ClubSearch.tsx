import React from "react";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { SearchBox, SearchInput } from "./ClubSearchStyle";

function ClubSearch() {
  return <SearchBox>
    <SearchInput type='text' placeholder='검색어를 입력하세요' />
    <SearchRoundedIcon className='icon' />
  </SearchBox>
}

export default ClubSearch;