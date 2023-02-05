import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import App from './Components/App/App';
import {GlobalStyle} from "./StyledComponents/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {theme} from "./StyledComponents/Theme";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <App/>
          <GlobalStyle/>
        </>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
