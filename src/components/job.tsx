import React from "react";
import styled from "styled-components";
import { colors, spacing } from "../global-style";
import WrapList from "./wrap-list";
import Box from "./box";

type Props = {
  from: string;
  to: string;
  company: string;
  jobTitle: string;
  technologies: Array<{ id: string; name: string }>;
};

const StyledDiv = styled.div`
  line-height: 1.25em;
`;

const FromTo = styled(StyledDiv)`
  color: ${colors.light};
  margin-bottom: ${spacing.small};
`;

const StyledBox = styled(Box)`
  font-size: 0.8em;
`;

const Job = ({ from, to, company, jobTitle, technologies }: Props) => (
  <div>
    <FromTo>{from} &rarr; {to}</FromTo>
    <StyledDiv>{jobTitle}</StyledDiv>
    <StyledDiv>@ {company}</StyledDiv>
    <WrapList items={technologies}>
      {({ name }) => <StyledBox>{name}</StyledBox>}
    </WrapList>
  </div>
);

export default Job;
