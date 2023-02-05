import React from 'react';
import StyledFooterInfo from "./FooterInfo.styled";
import FooterLink from "../FooterLink/FooterLink";

function FooterInfo() {
  return (
    <StyledFooterInfo>
      <FooterLink link={'#'} text={'Privacy Policy'}/>
      <FooterLink link={'#'} text={'Terms & Conditions'}/>
      <FooterLink link={'#'} text={'Cookie Policy'}/>
    </StyledFooterInfo>
  );
}

export default FooterInfo;
