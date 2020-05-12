import styled from "styled-components";
import { spacing, lineHeight, fontSize } from "../global-style";

const Paragraph = styled.p`
  margin-top: ${spacing.small};
  line-height: ${lineHeight.medium};
  text-align: justify;

  &:first-letter {
    font-size: ${fontSize.large};
  }
`;

export default Paragraph;
