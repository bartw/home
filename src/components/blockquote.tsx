import styled from "styled-components";
import { colors, spacing } from "../global-style";

const Blockquote = styled.blockquote`
  margin-top: ${spacing.small};
  margin-left: ${spacing.medium};
  padding-left: ${spacing.small};
  border-left: 3px solid ${({theme}) => theme.textContrast};
  color: ${({theme}) => theme.textContrast};
`;

export default Blockquote;
