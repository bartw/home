import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { fontSize, spacing } from "../global-style";
import ExternalLink from "./external-link";

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

const List = styled.ul`
  position: fixed;
  top: 50%;
  right: ${spacing.extraSmall};
  transform: translateY(-50%);

  @media (max-width: 480px) {
    position: static;
    top: 0;
    right: 0;
    transform: none;
    text-align: center;
  }
`;

const ListItem = styled.li`
  margin-top: ${spacing.medium};

  @media (max-width: 480px) {
    display: inline-block;
    margin: ${spacing.medium};
  }
`;

const Toggle = styled.button`
  background: none !important;
  border: none;
  margin: 0;
  padding: 0 !important;
  cursor: pointer;
  font-size: ${fontSize.medium};
  color: ${({ theme }) => theme.text};
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: ${fontSize.extraLarge};
`;

const SocialLinks = ({ theme, toggleTheme }) => (
  <List>
    <ListItem>
      <Toggle onClick={toggleTheme}>
        <Icon icon={theme === "light" ? faMoon : faSun} fixedWidth />
      </Toggle>
    </ListItem>
    {links.map(({ id, href, icon, label }) => (
      <ListItem key={id}>
        <ExternalLink href={href} label={label}>
          <Icon icon={icon} fixedWidth />
        </ExternalLink>
      </ListItem>
    ))}
  </List>
);

export default SocialLinks;
