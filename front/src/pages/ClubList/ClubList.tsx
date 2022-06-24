import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

import { isSignInState } from "@/utils/recoil";
import ClubCard from "@/components/ClubCard/ClubCard";
import * as Api from "@/utils/api";
import { Club } from "@/utils/interface";

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
  ["모집중", "state0"],
  ["모집완료", "state1"],
]);

const clubMeeting = new Map([
  ["온라인", "online1"],
  ["오프라인", "offline1"],
]);

const clubDuration = new Map([
  ["단기", "clubduration0"],
  ["1~2개월", "clubduration1"],
  ["3~4개월", "clubduration2"],
  ["5~6개월", "clubduration3"],
  ["6개월 이상", "clubduration4"],
  ["장기", "clubduration5"],
]);

const clubDay = new Map([
  ["평일", "weekday1"],
  ["주말", "weekend1"],
]);

function ClubList() {
  const navigate = useNavigate();

  const isSignIn = useRecoilValue<boolean>(isSignInState);
  const [ checkedItems, setCheckedItems ] = useState<string[]>([]);
  const [ lastIndex, setLastIndex ] = useState<number>(0);
  const [ resClubList, setResClubList ] = useState<Club[]>([]);

  const handleCreateButtonClick = () => {
    navigate("/clubCreate");
  };

  const handleDropDownItemCheck = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const checkEachFilter = (selected: Map<string, string>) => {
      if (selected.has(target.value)) {
        return selected.get(target.value);
      }
      return "";
    }
    const filterVal = checkEachFilter(clubState) || checkEachFilter(clubMeeting) || checkEachFilter(clubDuration) || checkEachFilter(clubDay);

    // * (1) Span으로 필터링 label 표시 @target.value
    // * (2) CardList 필터링 @Map의 value 값(target.id와 동일) -> CardList 있을 때만
    if (target.checked) {
      setCheckedItems((prev) => [
        ...prev,
        target.value
      ]);

      if (resClubList) {
        const attribute = filterVal?.slice(0, filterVal.length - 1);
        const attValue = filterVal?.slice(-1);
        setResClubList((prevArr) => {
          return prevArr.filter((club) => club[attribute] === Number(attValue));
        });
      }
    } else {
      setCheckedItems((prevArr) => { 
        return prevArr.filter((el) => el !== target.value);
      });
    }
  }

  const handleSpanClickDelete = (event: React.MouseEvent<HTMLSpanElement>) => {
    const clickedItem = event.currentTarget.id;
    setCheckedItems((prevArr) => { 
      return prevArr.filter((el) => el !== clickedItem);
    });
  }

  const handleFilterClear = () => {
    setCheckedItems([]);
  }

  const makeDropDown = (items: Map<string, string>) => {
    const dropDown: Array<any> = [];

    items.forEach((value, key) => {
      dropDown.push(
        <label key={value} htmlFor={value}>
          <input id={value} type='checkbox' value={key} onClick={handleDropDownItemCheck} />
          <span>{key}</span>
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

  useEffect(() => {
    Api.get(`/clubs`)
      .then((res) => {
        const { id } = res.data.result[3]; 
        setLastIndex(() => id);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    Api.get(`/clubs/scrollClublist/${lastIndex}`)
      .then((res) => {
        const { scrollClublist } = res.data;

        setResClubList((prev: any) => [
          ...prev,
          ...scrollClublist
        ]);
      })
      .catch((err) => console.error(err));
  }, [lastIndex])

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
        {checkedItems.map((item) => <SelectedSpan id={item} key={item} onClick={handleSpanClickDelete}>{item}</SelectedSpan>)}
        {!!checkedItems.length && (<ResetSpan onClick={handleFilterClear}>필터 초기화</ResetSpan>)}
      </SelectedSpanBox>
      <ClubListBox>
        {resClubList.map((club) => <ClubCard key={`${club.manager}+${club.id}`} club={club}/>)}
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
