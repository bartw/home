import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { fontSize } from "../global-style";
import Section from "./section";
import Box from "./box";
import ExternalLink from "./external-link";
import WrapList from "./wrap-list";

const links = [
  {
    id: "github",
    href: "https://github.com/bartw",
    icon: faGithub,
    label: "GitHub"
  },
  {
    id: "medium",
    href: "https://medium.com/@bartwijnants",
    icon: faMedium,
    label: "Medium"
  },
  {
    id: "linkedin",
    href: "https://be.linkedin.com/in/bart-wijnants-5a800650",
    icon: faLinkedin,
    label: "LinkedIn"
  }
];

const Icon = styled(FontAwesomeIcon)`
  font-size: ${fontSize.large};
`;

const SocialLinks = () => (
  <Section>
    <WrapList items={links}>
      {({ href, icon, label }) => (
        <ExternalLink href={href} label={label}>
          <Box>
            <Icon icon={icon} fixedWidth />
          </Box>
        </ExternalLink>
      )}
    </WrapList>
  </Section>
);

export default SocialLinks;
