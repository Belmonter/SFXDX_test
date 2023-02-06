import React from 'react';

import facebook from '../../../assets/img/svg/facebook.svg';
import instagram from '../../../assets/img/svg/instagram.svg';
import twitter from '../../../assets/img/svg/twitter.svg';
import youtube from '../../../assets/img/svg/youtube.svg';
import FooterSocialImg from '../FooterSocialImg/FooterSocialImg';

import StyledFooterSocial from './FooterSocial.styled';

function FooterSocial() {
	return (
		<StyledFooterSocial>
			<FooterSocialImg img={facebook} alt={'facebook'} link={'#'} />
			<FooterSocialImg img={twitter} alt={'twitter'} link={'#'} />
			<FooterSocialImg img={youtube} alt={'youtube'} link={'#'} />
			<FooterSocialImg img={instagram} alt={'instagram'} link={'#'} />
		</StyledFooterSocial>
	);
}

export default FooterSocial;
