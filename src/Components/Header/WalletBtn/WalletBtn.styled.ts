import styled from 'styled-components';

import { rem } from '../../../StyledComponents/Theme';

export const WalletBtnStyled = styled.button`
  width: ${rem(200)};
  height: ${rem(48)};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.whiteColor};
  box-shadow: 0 ${rem(8)} ${rem(16)} rgba(8, 216, 153, 0.2);
  border-radius: ${rem(8)};
  transition: all 0.5s ease 0s;

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
	
	&:active {
    transform: scale(0.9);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
	}
`;
