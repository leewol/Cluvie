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
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

// TODO : 필터링, 추가된 라벨 클릭 시 삭제, 필터 초기화, 검색, 클럽 카드 불러오기 (Api), 무한 스크롤
// TODO : 스타일 - 필터링 버튼 클릭 시 변경 색상 유지, 모든 dropdown 메뉴 완성

const clubState = new Map([
  ["clubstate_open", "모집중"],
  ["clubstate_closed", "마감"],
]);

const clubMeeting = new Map([
  ["clubmeeting_online", "온라인"],
  ["clubmeeting_offline", "오프라인"],
]);

const clubDuration = new Map([
  ["clubduration_short", "단기"],
  ["clubduration_12", "1~2개월"],
  ["clubduration_34", "3~4개월"],
  ["clubduration_56", "5~6개월"],
  ["clubduration_6over", "6개월 이상"],
  ["clubduration_long", "장기"],
]);

const clubDay = new Map([
  ["clubday_weekday", "평일"],
  ["clubday_weekend", "주말"],
]);

function ClubList() {
  const navigate = useNavigate();

  const makeDropDown = (items: Map<string, string>) => {
    const dropDown: Array<any> = [];

    items.forEach((value, key) => {
      dropDown.push(
        <label key={value} htmlFor={key}>
          <input id={key} type='checkbox' />
          <span>{value}</span>
        </label>
      );
    });

    return dropDown;
  };

  const HandleCreateButtonClick = () => {
    navigate("/clubCreate");
  };

  const HandleDropDownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget as HTMLInputElement;
    const dropDownMenu = document.querySelector(`.${target.name}`) as HTMLElement;
    
    target.classList.toggle("clicked");
    dropDownMenu.classList.toggle("hidden");
  };

  return (
    <ColumnContainerBox>
      <FilterBox>
        <SelectBox>
          <DropDownBox>
            <SelectButton
              type='button'
              name='clubstate'
              onClick={HandleDropDownClick}
            >
              모집 상태
              <ArrowDropDownRoundedIcon />
            </SelectButton>
            <DropDownMenu className='clubstate hidden'>
              {makeDropDown(clubState)}
            </DropDownMenu>
          </DropDownBox>
          <DropDownBox>
            <SelectButton
              type='button'
              name='clubmeeting'
              onClick={HandleDropDownClick}
            >
              진행 방식
              <ArrowDropDownRoundedIcon />
            </SelectButton>
            <DropDownMenu className='clubmeeting hidden'>
              {makeDropDown(clubMeeting)}
            </DropDownMenu>
          </DropDownBox>
          <DropDownBox>
            <SelectButton
              type='button'
              name='clubduration'
              onClick={HandleDropDownClick}
            >
              진행 기간
              <ArrowDropDownRoundedIcon />
            </SelectButton>
            <DropDownMenu className='clubduration hidden'>
              {makeDropDown(clubDuration)}
            </DropDownMenu>
          </DropDownBox>
          <DropDownBox>
            <SelectButton
              type='button'
              name='clubday'
              onClick={HandleDropDownClick}
            >
              요일
              <ArrowDropDownRoundedIcon />
            </SelectButton>
            <DropDownMenu className='clubday hidden'>
              {makeDropDown(clubDay)}
            </DropDownMenu>
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
