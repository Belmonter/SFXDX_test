import React from 'react';
import {HeaderStyled} from "./Header.styled";
import WalletBtn from "./WalletBtn/WalletBtn";
import Container from "../../StyledComponents/Container";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <>
      <Container boxSizing={'border-box'}>
        <HeaderStyled>
          <Logo/>
          <WalletBtn/>
        </HeaderStyled>
      </Container>
      <hr/>
    </>
  );
}

export default Header;
