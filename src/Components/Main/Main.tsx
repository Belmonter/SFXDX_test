import React from 'react';
import {MainStyled} from './Main.styled'
import Container from "../../StyledComponents/Container";
import PlaceOrder from "./PlaceOrder/PlaceOrder";

function Main() {
  return (
    <MainStyled>
      <Container>
        <PlaceOrder/>
      </Container>
    </MainStyled>
  );
}

export default Main;
