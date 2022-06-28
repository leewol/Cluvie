import styled from "@emotion/styled/macro";

import { Card, CardContent } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { StyledSpan } from "@/styles/text";

const WholeCard = styled(Card)<{ clubState: boolean }>`
  width: 350px;
  height: 500px;
  cursor: pointer;
  opacity: ${(props) => (props.clubState ? "0.5" : "1")};
`;

const ClubCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  span {
    color: #5b5b5b;
  }
`;

const ClubCardInfos = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -5px;
  ${StyledSpan} {
    background-color: #d3d3d3;
    border: 3px solid #d3d3d3;
  }
`;

const ClubCardFavoriteIcon = styled(FavoriteIcon)`
  color: #f07167;
  font-size: 28px;
`;

const ClubCardFavoriteBorderIcon = styled(FavoriteBorderIcon)`
  font-size: 28px;
`;

export { WholeCard, ClubCardContent, ClubCardInfos, ClubCardFavoriteIcon, ClubCardFavoriteBorderIcon };