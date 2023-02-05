import styled from "styled-components";
import {rem} from "../../StyledComponents/Theme";

const StyledFooter = styled.div`
  min-height: ${rem(221)};
  padding: ${rem(49)} 0 ${rem(40)} 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme}) => theme.mainBackgroundColor};
  border-top: ${rem(1)} solid #CDD2DD;
`

export default StyledFooter
