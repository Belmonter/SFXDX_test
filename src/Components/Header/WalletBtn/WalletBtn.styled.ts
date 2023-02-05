import styled from "styled-components";
import {rem} from "../../../StyledComponents/Theme";

export const WalletBtnStyled = styled.button`
  width: ${rem(200)};
  height: ${rem(48)};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.primaryColor};;
  color: ${({theme}) => theme.whiteColor};;
  box-shadow: 0 ${rem(8)} ${rem(16)} rgba(8, 216, 153, 0.2);
  border-radius: ${rem(8)}
`
