import styled from "styled-components";
import {rem} from "../../../StyledComponents/Theme";

const StyledFooterRights = styled.p`
  margin-top: ${rem(29)};
  font-weight: 500;
  font-size: ${rem(14)};
  line-height: 22px;
  text-align: center;
  color: ${({theme}) => theme.textTertiaryColor};
`

export default StyledFooterRights
