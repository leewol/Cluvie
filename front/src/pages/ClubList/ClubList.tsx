import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

import { isSignInState } from "@/utils/recoil";
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

// TODO : 추가된 라벨 클릭 시 삭제, 필터 초기화, 클럽 카드 불러오기 (Api), 무한 스크롤, 필터링, 검색 

const clubState = new Map([
  ["state0", "모집중"],
  ["state1", "마감"],
]);

const clubMeeting = new Map([
  ["online1", "온라인"],
  ["offline1", "오프라인"],
]);

const clubDuration = new Map([
  ["clubduration0", "단기"],
  ["clubduration1", "1~2개월"],
  ["clubduration2", "3~4개월"],
  ["clubduration3", "5~6개월"],
  ["clubduration4", "6개월 이상"],
  ["clubduration5", "장기"],
]);

const clubDay = new Map([
  ["weekday1", "평일"],
  ["weekend1", "주말"],
]);

function ClubList() {
  const navigate = useNavigate();

  const isSignIn = useRecoilValue<boolean>(isSignInState);

  const handleCreateButtonClick = () => {
    navigate("/clubCreate");
  };

  const handleDropDownItemCheck = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    console.log(target.name, target.value);
  }

  const makeDropDown = (items: Map<string, string>) => {
    const dropDown: Array<any> = [];

    items.forEach((value, key) => {
      dropDown.push(
        <label key={value} htmlFor={key}>
          <input id={key} type='checkbox' value={value} onClick={handleDropDownItemCheck} />
          <span>{value}</span>
        </label>
      );
    });

    return dropDown;
  };

  const handleDropDownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
              onClick={handleDropDownClick}
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
              onClick={handleDropDownClick}
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
              onClick={handleDropDownClick}
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
              onClick={handleDropDownClick}
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
      {
        isSignIn && (
        <ClubCreateButtonBox>
          <AddCircleOutlinedIcon
            className='create-icon'
            onClick={handleCreateButtonClick}
          />
        </ClubCreateButtonBox>
      )}
    </ColumnContainerBox>
  );
}

export default ClubList;
