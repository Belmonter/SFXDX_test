import styled from "styled-components";
import {rem} from "../../../StyledComponents/Theme";

const StyledSocial = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${rem(30)};
  @media (max-width: 768px) {
      margin-top: ${rem(30)};
  }
`

export default StyledSocial
