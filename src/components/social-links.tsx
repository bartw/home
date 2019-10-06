import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import Section from "./section";
import Box from "./box";
import ExternalLink from "./external-link";
import WrapList from "./wrap-list";

const links = [
  { id: "github", href: "https://github.com/bartw", icon: faGithub },
  {
    id: "medium",
    href: "https://medium.com/@bartwijnants",
    icon: faMedium
  },
  {
    id: "linkedin",
    href: "https://be.linkedin.com/in/bart-wijnants-5a800650",
    icon: faLinkedin
  }
];

const SocialLinks = () => (
  <Section>
    <WrapList items={links}>
      {({ href, icon }) => (
        <ExternalLink href={href}>
          <Box>
            <FontAwesomeIcon icon={icon} fixedWidth />
          </Box>
        </ExternalLink>
      )}
    </WrapList>
  </Section>
);

export default SocialLinks;
