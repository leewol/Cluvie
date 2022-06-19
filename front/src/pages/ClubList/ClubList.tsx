import React from "react";
import { useNavigate } from "react-router-dom";

import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

import ClubCard from "@/components/ClubCard";

import { ColumnContainerBox } from "@/styles/containers";
import { SelectedSpan } from "@/styles/text";
import * as Styled from "./ClubListStyle";

// TODO : 필터링, 추가된 라벨 클릭 시 삭제, 필터 초기화, 검색, 클럽 카드 불러오기 (Api), 무한 스크롤
// TODO : 스타일 - 필터링 버튼 클릭 시 변경 색상 유지, 모든 dropdown 메뉴 완성

function ClubList() {
  const navigate = useNavigate();

  const HandleCreateButtonClick = () => {
    navigate("/clubCreate");
  };

  return (
    <ColumnContainerBox>
      <Styled.FilterBox>
        <Styled.SelectBox>
          <Styled.DropDownBox>
            <Styled.SelectButton type='button'>
              모집상태
              <ArrowDropDownRoundedIcon />
            </Styled.SelectButton>
            <Styled.DropDownMenu className='dropdown-menu'>
              <label htmlFor='clubstate_online'>
                <input id='clubstate_online' type='checkbox' />
                <span>온라인</span>
              </label>
              <label htmlFor='clubstate_offline'>
                <input id='clubstate_offline' type='checkbox' />
                <span>오프라인</span>
              </label>
            </Styled.DropDownMenu>
          </Styled.DropDownBox>
          <Styled.DropDownBox>
            <Styled.SelectButton type='button'>
              진행방식
              <ArrowDropDownRoundedIcon />
            </Styled.SelectButton>
          </Styled.DropDownBox>
          <Styled.DropDownBox>
            <Styled.SelectButton type='button'>
              진행기간
              <ArrowDropDownRoundedIcon />
            </Styled.SelectButton>
          </Styled.DropDownBox>
          <Styled.DropDownBox>
            <Styled.SelectButton type='button'>
              요일
              <ArrowDropDownRoundedIcon />
            </Styled.SelectButton>
          </Styled.DropDownBox>
        </Styled.SelectBox>
        <Styled.SearchBox>
          <Styled.SearchInput type='text' placeholder='검색어를 입력하세요' />
          <SearchRoundedIcon className='icon' />
        </Styled.SearchBox>
      </Styled.FilterBox>
      <Styled.SelectedSpanBox>
        <SelectedSpan>온라인</SelectedSpan>
        <SelectedSpan>1~2개월</SelectedSpan>
        <Styled.ResetSpan>필터 초기화</Styled.ResetSpan>
      </Styled.SelectedSpanBox>
      <Styled.ClubListBox>
        <ClubCard />
      </Styled.ClubListBox>
      <Styled.ClubCreateButtonBox>
        <AddCircleOutlinedIcon
          className='create-icon'
          onClick={HandleCreateButtonClick}
        />
      </Styled.ClubCreateButtonBox>
    </ColumnContainerBox>
  );
}

export default ClubList;
