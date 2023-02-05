import React from 'react';
import StyledFooterSocialImg from "./FooterSocialImg.styled";

interface IFooterSocialImgProps {
  img: string,
  alt: string,
  link: string
}

function FooterSocialImg({img, alt, link}: IFooterSocialImgProps) {
  return (
    <a href={link}>
      <StyledFooterSocialImg src={img} alt={alt}/>
    </a>
  );
}

export default FooterSocialImg;
