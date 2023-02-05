import React from 'react';
import logo from "../../assets/img/svg/logo.svg";
import {LogoStyled} from './Logo.styled'


function Logo() {
  return (
    <LogoStyled>
      <img src={logo} alt="logo"/>
    </LogoStyled>
  );
}

export default Logo;
