import styled from "styled-components";
import { colors, spacing } from "../global-style";

const Box = styled.div`
  display: block;
  padding: ${spacing.small};
  background-color: ${colors.backgroundContrast};
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

export default Box;
