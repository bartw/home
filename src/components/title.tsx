import styled from "styled-components";
import { fontSize, lineHeight } from "../global-style";

const Title = styled.h1`
  font-family: "Space Mono";
  font-size: ${fontSize.extraExtraExtraLarge};
  line-height: ${lineHeight.medium};
  text-align: center;

  @media (max-width: 568px) {
    font-size: ${fontSize.extraExtraLarge};
  }
`;

export default Title;
