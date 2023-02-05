import styled from "styled-components";
import {rem} from "../../../StyledComponents/Theme";

const StyledFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${rem(15)};
  @media (max-width: 768px) {
    margin-top: ${rem(60)};
    order: 0
  }
`

export default StyledFooterInfo
