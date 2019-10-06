import React from "react";
import styled from "styled-components";
import { colors, spacing } from "../global-style";
import Title from "./title";
import SocialLinks from "./social-links";
import Bio from "./bio";
import Experience from "./experience";

const OuterContainer = styled.div`
  border-top: 3px solid ${colors.accent};
`;

const InnerContainer = styled.div`
  padding: ${spacing.large};
  max-width: 600px;
  margin: 0 auto;
`;

const App = () => (
  <OuterContainer>
    <InnerContainer>
      <Title>Bart Wijnants</Title>
      <Bio />
      <SocialLinks />
      <Experience />
    </InnerContainer>
  </OuterContainer>
);

export default App;
