import styled from "styled-components";
import { colors, spacing } from "../global-style";

const Blockquote = styled.blockquote`
  margin-top: ${spacing.small};
  margin-left: ${spacing.medium};
  padding-left: ${spacing.small};
  border-left: 3px solid ${colors.light};
  color: ${colors.light}
`;

export default Blockquote;
