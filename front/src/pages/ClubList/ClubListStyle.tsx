import styled from "@emotion/styled/macro";

import { ContainerBox } from "@/styles/containers";
import { StyledSpan } from "@/styles/span";

const ClubListContainerBox = styled(ContainerBox)`
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
`;

const FilterBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SelectBox = styled.div`
  display: flex;
`;

const SelectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 20px 13px 20px 20px;
  margin-right: 5px;
  cursor: pointer;
  border: 1px solid #ffc300;
  border-radius: 7px;
  background-color: transparent;
  font-size: 16px;
  font-family: inherit;
  &:hover {
    opacity: 1;
    background-color: #ffc300;
  }
`;

const SearchBox = styled.div`
  width: 300px;
  height: 42px;
  position: relative;

  .icon {
    position: absolute;
    top: 0;
    right: 4%;
    margin-top: 7px;
    font-size: 28px;
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 42px;
  box-sizing: border-box;
  margin-bottom: 8px;
  border-radius: 7px;
  outline: none;
  padding-left: 15px;
  border: 0;
  background-color: rgba(255, 224, 71, 0.7);
  // box-shadow: 3px 3px 5px #f1f1f1;
`;

const SelectedSpanBox = styled.div`
  width: 100%;
  margin-bottom: 100px;
`;

const SelectedSpan = styled(StyledSpan)`
  background-color: #716847;
  border-color: #716847;
  color: white;
  font-weight: 400;
  padding: 5px 10px;
  cursor: pointer;
`;

const ResetSpan = styled.span`
  font-size: 14px;
  color: #716847;
  margin-left: 5px;
  cursor: pointer;
`;

const ClubListBox = styled.div`
  width: 100%;
`;

const DropDownBox = styled.div`
  position: relative;
`;

const DropDownMenu = styled.div`
  width: 97%;
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #ffc300;
  border-radius: 7px;
  margin-top: 2px;
  padding: 10px;
  span {
    margin-left: 5px;
  }
`;

const ClubCreateButtonBox = styled.div`
  position: fixed;
  bottom: 10%;
  right: 9%;
  .create-icon {
    font-size: 80px;
    cursor: pointer;
  }
`;

export {
  ClubListContainerBox,
  FilterBox,
  SelectBox,
  SelectButton,
  SearchBox,
  SearchInput,
  SelectedSpanBox,
  SelectedSpan,
  ResetSpan,
  ClubListBox,
  DropDownBox,
  DropDownMenu,
  ClubCreateButtonBox,
};
