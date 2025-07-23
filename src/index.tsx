import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
    overflow-y: auto;
  }

  body {
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    overflow-y: auto;
  }

  #root {
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 