import styled from "styled-components";
import {rem} from "../../../StyledComponents/Theme";

const StyledConnectedWalletBtn = styled.button`
  padding: ${rem(10)} ${rem(12)};
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: ${rem(8)};
  background: ${({theme}) => theme.whiteColor};
  border-radius: ${rem(20)};

  p {
    font-family: Manrope;
    font-weight: 700;
    font-size: ${rem(14)};
    line-height: 16px;
    color: ${({theme}) => theme.primaryColor};;
    @media (max-width: 480px) {
      font-size: ${rem(12)};
    }
  }

  img:first-child {
    width: ${rem(24)};
    height: ${rem(24)};
    object-fit: contain;
    @media (max-width: 480px) {
      width: ${rem(18)};
      height: ${rem(18)};
    }
  }

  img:last-child {
    width: ${rem(16)};
    height: ${rem(16)};
    object-fit: contain;
  }
`

export default StyledConnectedWalletBtn
