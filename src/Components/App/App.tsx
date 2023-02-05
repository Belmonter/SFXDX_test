import React from 'react';
import Header from "../Header/Header";
import DynamicBackground from "../DynamicBackground/DynamicBackground";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Wrapper from "../../StyledComponents/Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <DynamicBackground>
          <>
            <Header/>
            <Main/>
          </>
        </DynamicBackground>
      </Wrapper>
      <Footer/>
    </>
  );
}

export default App;
