import React from "react";
import styled from "styled-components";
import { colors } from "../global-style";

type Props = { from: string; to: string; company: string; jobTitle: string };

const StyledDiv = styled.div`
  line-height: 1.25em;
`;

const FromTo = styled(StyledDiv)`
  color: ${colors.light};
`;

const Job = ({ from, to, company, jobTitle }: Props) => (
  <div>
    <StyledDiv>{jobTitle}</StyledDiv>
    <StyledDiv>{company}</StyledDiv>
    <FromTo>
      {from} &rarr; {to}
    </FromTo>
  </div>
);

export default Job;
