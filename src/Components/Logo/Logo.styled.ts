import styled from "styled-components";
import {rem} from "../../StyledComponents/Theme";


export const LogoStyled = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: flex;
  @media (max-width: 768px) {
    position: static;
    transform: unset;
    flex: 1 1 auto;
  }

  img {
    width: ${rem(148)};
    height: ${rem(24)};
    object-fit: contain;
    @media (max-width: 480px) {
      width: ${rem(98)};
      height: ${rem(16)};
    }
  }
`
