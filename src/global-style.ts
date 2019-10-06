import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  background: "#252525",
  backgroundContrast: "#4b4b4b",
  textContrast: "#a7a7a7",
  text: "#cccccc",
  accent: "#86CB92"
};

export const spacing = {
  small: "10px",
  medium: "15px",
  large: "20px"
};

export const fontSize = {
  small: "12px",
  medium: "14px",
  large: "16px",
  extraLarge: "20px"
};

export const lineHeight = {
  small: "1em",
  medium: "1.25em"
};

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: ${fontSize.medium};
    background-color: ${colors.background};
    color: ${colors.text};
  }
`;

export default GlobalStyle;
