import React from "react";
import styled from "styled-components";
import { colors, spacing, fontSize, lineHeight } from "../global-style";
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
  line-height: ${lineHeight.medium};
`;

const JobTitle = styled(StyledDiv)`
  font-variant: small-caps;
`;

const Company = styled(StyledDiv)`
  font-variant: small-caps;
`;

const FromTo = styled(StyledDiv)`
  color: ${({theme}) => theme.textContrast};
  margin-bottom: ${spacing.small};
`;

const StyledBox = styled(Box)`
  font-size: ${fontSize.small};
`;

const Job = ({ from, to, company, jobTitle, technologies }: Props) => (
  <div>
    <FromTo>
      {from} &rarr; {to}
    </FromTo>
    <JobTitle>{jobTitle}</JobTitle>
    <Company>@ {company}</Company>
    <WrapList items={technologies}>
      {({ name }) => <StyledBox>{name}</StyledBox>}
    </WrapList>
  </div>
);

export default Job;
