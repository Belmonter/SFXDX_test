import React from 'react';

import FooterLink from '../FooterLink/FooterLink';

import StyledFooterInfo from './FooterInfo.styled';

function FooterInfo() {
	return (
		<StyledFooterInfo>
			<FooterLink link={'#'} text={'Privacy Policy'} />
			<FooterLink link={'#'} text={'Terms & Conditions'} />
			<FooterLink link={'#'} text={'Cookie Policy'} />
		</StyledFooterInfo>
	);
}

export default FooterInfo;
