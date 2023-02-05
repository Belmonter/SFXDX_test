import styled from "styled-components";
import {rem} from "../../../StyledComponents/Theme";

const StyledFooterLink = styled.a`
  font-family: Gilroy;
  font-weight: 500;
  font-size: ${rem(16)};
  line-height: 100%;
  color: ${({theme}) => theme.textSecondaryColor};
  transition: all 0.3s ease 0s;
  @media (max-width: 768px) {
      text-align: center;
  }
  &:hover {
      color: #08D899;
  }
`

export default StyledFooterLink
