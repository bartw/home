import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../global-style";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
  label?: string;
};

const Link = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.text};

  &:hover {
    text-decoration: none;
  }
`;

const ExternalLink = ({ href, className, children, label }: Props) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    aria-label={label}
  >
    {children}
  </Link>
);

export default ExternalLink;
