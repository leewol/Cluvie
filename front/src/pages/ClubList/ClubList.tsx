import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { ContainerBox, ColumnContainerBox } from "@/styles/containers";
import { FilterBox, ClubListBox, ClubCreateButtonBox } from "./ClubListStyle";

import ClubCard from "@/components/ClubCard/ClubCard";
import ClubFilter from "@/components/ClubList/ClubFilter/ClubFilter";
import ClubSearch from "@/components/ClubList/ClubSearch/ClubSearch";
import ClubFilterSpanList from "@/components/ClubList/ClubFilterSpanList/ClubFilterSpanList";

import { useScrollClubList } from "@/hooks/queries/useClubList";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

import { isSignInState } from "@/utils/recoil";
import { Club } from "@/utils/interface";


// TODO : 추가된 라벨 클릭 시 삭제, 필터 초기화, 클럽 카드 불러오기 (Api), 무한 스크롤, 필터링, 검색 

function ClubList() {
  const isSignIn = useRecoilValue<boolean>(isSignInState);

  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const clubListRes = useScrollClubList();
  const clubsPerScroll = clubListRes?.data?.pages ?? [];

  const handleCreateButtonClick = () => {
    navigate("/clubCreate");
  };

  useInfiniteScroll(clubListRes, cardRef);

  console.log(clubListRes);

  if (clubListRes.isLoading) {
    return <ContainerBox>Loading...</ContainerBox>;
  }

  return (
    <ColumnContainerBox>
      <FilterBox>
       <ClubFilter />
       <ClubSearch />
      </FilterBox>
      <ClubFilterSpanList />
      <ClubListBox>
        {
          clubsPerScroll.map((scroll, scrollIndex) => {
            const { scrollClublist } = scroll.data;
            return scrollClublist.map((club: Club, clubIndex: number) =>
              <ClubCard 
                key={`${club.manager}+${club.id}`}
                club={club}
                ref={(scrollClublist.length * scrollIndex + clubIndex === clubsPerScroll.length * scrollClublist.length - 1) ? cardRef : null}
              />)
          })
        }
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
