import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

type Theme = {
  background: string;
  backgroundContrast: string;
  text: string;
  textContrast: string;
};

const light = {
  background: "#eee",
  backgroundContrast: "#ccc",
  text: "#222",
  textContrast: "#666",
};

const dark = {
  background: "#222",
  backgroundContrast: "#666",
  text: "#ddd",
  textContrast: "#bbb",
};

export const colors = { light, dark };

export const spacing = {
  extraSmall: "5px",
  small: "10px",
  medium: "15px",
  large: "20px",
};

export const fontSize = {
  small: "0.8em",
  medium: "1em",
  large: "1.5em",
  extraLarge: "2em",
  extraExtraLarge: "3em",
  extraExtraExtraLarge: "4em",
};

export const lineHeight = {
  small: "1em",
  medium: "1.25em",
};

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${reset}
  
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
`;

export default GlobalStyle;
