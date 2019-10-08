import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../global-style";

type Props = { href: string; className?: string; children: ReactNode };

const Link = styled.a`
  text-decoration: underline;
  color: ${colors.text};

  &:hover {
    text-decoration: none;
    color: ${colors.accent};
  }
`;

const ExternalLink = ({ href, className, children }: Props) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    {children}
  </Link>
);

export default ExternalLink;
