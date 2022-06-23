import React from "react";
import { useNavigate } from "react-router-dom";

import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

import ClubCard from "@/components/ClubCard";

import { ColumnContainerBox } from "@/styles/containers";
import { SelectedSpan } from "@/styles/text";
import {
  FilterBox,
  SelectBox,
  DropDownBox,
  DropDownMenu,
  SelectButton,
  SearchBox,
  SearchInput,
  SelectedSpanBox,
  ResetSpan,
  ClubListBox,
  ClubCreateButtonBox,
} from "./ClubListStyle";

// TODO : 필터링, 추가된 라벨 클릭 시 삭제, 필터 초기화, 검색, 클럽 카드 불러오기 (Api), 무한 스크롤
// TODO : 스타일 - 필터링 버튼 클릭 시 변경 색상 유지, 모든 dropdown 메뉴 완성

function ClubList() {
  const navigate = useNavigate();

  const HandleCreateButtonClick = () => {
    navigate("/clubCreate");
  };

  return (
    <ColumnContainerBox>
      <FilterBox>
        <SelectBox>
          <DropDownBox>
            <SelectButton type='button'>
              모집상태
              <ArrowDropDownRoundedIcon />
            </SelectButton>
            <DropDownMenu className='dropdown-menu'>
              <label htmlFor='clubstate_online'>
                <input id='clubstate_online' type='checkbox' />
                <span>온라인</span>
              </label>
              <label htmlFor='clubstate_offline'>
                <input id='clubstate_offline' type='checkbox' />
                <span>오프라인</span>
              </label>
            </DropDownMenu>
          </DropDownBox>
          <DropDownBox>
            <SelectButton type='button'>
              진행방식
              <ArrowDropDownRoundedIcon />
            </SelectButton>
          </DropDownBox>
          <DropDownBox>
            <SelectButton type='button'>
              진행기간
              <ArrowDropDownRoundedIcon />
            </SelectButton>
          </DropDownBox>
          <DropDownBox>
            <SelectButton type='button'>
              요일
              <ArrowDropDownRoundedIcon />
            </SelectButton>
          </DropDownBox>
        </SelectBox>
        <SearchBox>
          <SearchInput type='text' placeholder='검색어를 입력하세요' />
          <SearchRoundedIcon className='icon' />
        </SearchBox>
      </FilterBox>
      <SelectedSpanBox>
        <SelectedSpan>온라인</SelectedSpan>
        <SelectedSpan>1~2개월</SelectedSpan>
        <ResetSpan>필터 초기화</ResetSpan>
      </SelectedSpanBox>
      <ClubListBox>
        <ClubCard />
      </ClubListBox>
      <ClubCreateButtonBox>
        <AddCircleOutlinedIcon
          className='create-icon'
          onClick={HandleCreateButtonClick}
        />
      </ClubCreateButtonBox>
    </ColumnContainerBox>
  );
}

export default ClubList;
