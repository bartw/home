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

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    background-color: ${colors.background};
    color: ${colors.text};
  }
`;

export default GlobalStyle;
