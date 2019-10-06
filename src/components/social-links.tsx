import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { spacing } from "../global-style";
import Section from "./section";
import Subtitle from "./subtitle";
import Box from "./box";
import ExternalLink from "./external-link";

const links = [
  { href: "https://github.com/bartw", icon: faGithub },
  {
    href: "https://medium.com/@bartwijnants",
    icon: faMedium
  },
  {
    href: "https://be.linkedin.com/in/bart-wijnants-5a800650",
    icon: faLinkedin
  }
];

const List = styled.ul`
  margin-top: ${spacing.small};
  display: flex;
`;

const ListItem = styled.li`
  margin-right: ${spacing.small};
`;

const SocialLinks = () => (
  <Section>
    <Subtitle>Find me on</Subtitle>
    <List>
      {links.map(({ href, icon }, index) => (
        <ListItem key={index}>
          <ExternalLink href={href}>
            <Box>
              <FontAwesomeIcon icon={icon} fixedWidth />
            </Box>
          </ExternalLink>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default SocialLinks;
