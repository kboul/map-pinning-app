import styled from "styled-components";
import { sharedPopupContainer } from "../styledComponents";

const PopupInfo = styled.div`
  ${sharedPopupContainer};
  justify-content: space-around;
`;

const Description = styled.span`
  font-size: 14px;
  margin: 0px;
`;

const Place = styled.h3`
  margin: 0px;
`;

const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const User = styled.div`
  font-size: 14px;
`;

const Username = styled.span`
  font-weight: bold;
`;

const Date = styled.span`
  font-size: 12px;
`;

const PinContainer = styled.div``;

export {
  Date,
  Description,
  PinContainer,
  Place,
  PopupInfo,
  StarContainer,
  User,
  Username
};
