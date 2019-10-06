import React from "react";
import styled from "styled-components";
import { spacing } from "../global-style";
import Section from "./section";
import Subtitle from "./subtitle";
import Box from "./box";

const skills = [
  { name: "Agile" },
  { name: "XP" },
  { name: "Teamwork" },
  { name: "React" },
  { name: "GraphQL" },
  { name: "Redux" },
  { name: "Java" },
  { name: "C#" }
];

const List = styled.ul`
  margin-top: ${spacing.small};
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin-right: ${spacing.small};
  margin-bottom: ${spacing.small};
`;

const SocialLinks = () => (
  <Section>
    <Subtitle>Skills</Subtitle>
    <List>
      {skills.map(({ name }) => (
        <ListItem key={name}>
          <Box>{name}</Box>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default SocialLinks;
