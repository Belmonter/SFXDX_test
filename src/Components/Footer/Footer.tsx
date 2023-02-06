import React from 'react';

import Container from '../../StyledComponents/Container';

import StyledFooter from './Footer.styled';
import FooterInfo from './FooterInfo/FooterInfo';
import FooterLogo from './FooterLogo/FooterLogo';
import FooterRights from './FooterRights/FooterRights';
import FooterSocial from './FooterSocial/FooterSocial';
import FooterWrapper from './FooterWrapper.styled';

function Footer() {
	return (
		<StyledFooter>
			<Container>
				<FooterWrapper>
					<FooterInfo />
					<FooterLogo />
					<FooterSocial />
				</FooterWrapper>
				<FooterRights />
			</Container>
		</StyledFooter>
	);
}

export default Footer;
