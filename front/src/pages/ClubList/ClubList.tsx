import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { ContainerBox, ColumnContainerBox } from "@/styles/containers";
import { FilterBox, ClubListBox, ClubCreateButtonBox, LoadingMsg } from "./ClubListStyle";

import { useScrollClubList } from "@/hooks/queries/useClubList";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

import { isSignInUser, filters } from "@/utils/recoil";
import { Club } from "@/utils/interface";

import ClubCard from "@/components/ClubCard/ClubCard";
import ClubFilter from "@/components/ClubList/ClubFilter/ClubFilter";
import ClubSearch from "@/components/ClubList/ClubSearch/ClubSearch";
import ClubFilterSpanList from "@/components/ClubList/ClubFilterSpanList/ClubFilterSpanList";

// TODO : 검색 

function ClubList() {
  const isSignIn = useRecoilValue<boolean>(isSignInUser);
  const checkedItems = useRecoilValue(filters);

  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);

  const clubListRes = useScrollClubList(isSignIn ? "isLogined/scrollClublist" : "scrollClublist");
  const clubsPerScroll = clubListRes?.data?.pages ?? [];

  const handleCreateButtonClick = () => {
    navigate("/clubCreate");
  };

  console.log(clubsPerScroll);
  useInfiniteScroll(clubListRes, cardRef);

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
            let { scrollClublist } = scroll;
            // 필터링
            Object.values(checkedItems).forEach((filterKey) => {
              const attribute = filterKey?.slice(0, filterKey.length - 1);
              const attValue = filterKey?.slice(-1);
              console.log(attribute, attValue);
              scrollClublist = scrollClublist.filter((club: Club) => club[attribute] === Number(attValue));
            });
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
      {
        clubListRes.isFetchingNextPage &&
        <LoadingMsg className={`${!clubListRes.hasNextPage ? "hidden" : ""}`}>
          Loading more...
        </LoadingMsg>
      }
    </ColumnContainerBox>
  );
}

export default ClubList;
