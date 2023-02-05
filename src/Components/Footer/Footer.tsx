import React from 'react';
import Container from "../../StyledComponents/Container";
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterSocial from "./FooterSocial/FooterSocial";
import FooterRights from "./FooterRights/FooterRights";
import StyledFooter from "./Footer.styled";
import FooterWrapper from "./FooterWrapper.styled";
import FooterLogo from "./FooterLogo/FooterLogo";


function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterWrapper>
          <FooterInfo/>
          <FooterLogo />
          <FooterSocial/>
        </FooterWrapper>
        <FooterRights/>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
