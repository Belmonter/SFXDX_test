import React from 'react';

import Container from '../../StyledComponents/Container';
import Logo from '../Logo/Logo';

import { HeaderStyled } from './Header.styled';
import WalletBtn from './WalletBtn/WalletBtn';

function Header() {
	return (
		<>
			<Container boxSizing={'border-box'}>
				<HeaderStyled>
					<Logo />
					<WalletBtn />
				</HeaderStyled>
			</Container>
			<hr />
		</>
	);
}

export default Header;
