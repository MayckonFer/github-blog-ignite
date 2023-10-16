import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #ccc;
  }

  body {
    background-color: #fff;
    color: #ccc;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1.4rem Nunito, sans-serif;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 100%;
    height: auto;
    max-width: max-content;
  }

  ul {
    list-style: none;
  }
`;
