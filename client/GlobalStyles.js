import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }

  a, Link {
    color: #325D79;
    text-decoration: none;
  }

  .link-reset {
    color: #F26627;
    text-decoration: none;
  }

  .hover-reset:hover {
    color: #F26627;
    text-decoration: none;
    border-bottom: #F9A26C;
    border-bottom-width: 0px;
  }

  a:hover{
    color: #325D79;
    text-decoration: none;
    border-bottom: #F9A26C;
    border-bottom-style: solid;
    border-bottom-width: 3px;
  }

  p {
    margin: 0;
  }


`;

export default GlobalStyle;
