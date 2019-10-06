import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  veryDark: "#252525",
  dark: "#4b4b4b",
  light: "#a7a7a7",
  veryLight: "#cccccc",
  accent: "#86CB92"
};

export const spacing = {
  small: "10px",
  medium: "15px",
  large: "20px"
};

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    font-family: sans-serif;
    font-size: 14px;
    background-color: ${colors.veryDark};
    color: ${colors.veryLight};
  }
`;

export default GlobalStyle;
