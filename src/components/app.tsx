import React from "react";
import styled from "styled-components";
import { spacing } from "../global-style";
import Title from "./title";
import Actions from "./actions";
import Bio from "./bio";
import Experience from "./experience";

const InnerContainer = styled.div`
  padding: ${spacing.large};
  max-width: 300px;
  margin: 0 auto;
`;

const App = ({ theme, toggleTheme }) => (
  <>
    <Actions theme={theme} toggleTheme={toggleTheme} />
    <Title>Bart Wijnants</Title>
    <InnerContainer>
      <Bio />
      <Experience />
    </InnerContainer>
  </>
);

export default App;
