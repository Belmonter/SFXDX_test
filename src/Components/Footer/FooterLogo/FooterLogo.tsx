import React from 'react';

import logo from '../../../assets/img/svg/logo.svg';

import StyledFooterLogo from './FooterLogo.styled';

function FooterLogo() {
	return (
		<StyledFooterLogo>
			<img src={logo} alt="logo" />
		</StyledFooterLogo>
	);
}

export default FooterLogo;
