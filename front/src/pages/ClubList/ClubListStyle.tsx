import styled from "@emotion/styled/macro";

export const FilterBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ClubListBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 4%;
  row-gap: 50px;
`;

export const ClubCreateButtonBox = styled.div`
  position: fixed;
  bottom: 10%;
  right: 9%;
  .create-icon {
    font-size: 80px;
    cursor: pointer;
  }
`;
