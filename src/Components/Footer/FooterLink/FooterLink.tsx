import React from 'react';

import StyledFooterLink from './FooterLink.styled';

interface IFooterLinkProps {
	text: string;
	link: string;
}

function FooterLink({ link, text }: IFooterLinkProps) {
	return <StyledFooterLink href={link}>{text}</StyledFooterLink>;
}

export default FooterLink;
