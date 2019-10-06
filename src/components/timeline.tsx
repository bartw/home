import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors, spacing } from "../global-style";

const ListItem = styled.li`
  position: relative;
  padding-top: ${spacing.small};
  padding-left: ${spacing.medium};

  &:before {
    content: "";
    position: absolute;
    border-left: 1px solid ${colors.backgroundContrast};
    top: 0;
    left: 2px;
    height: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    border: 1px solid ${colors.text};
    border-radius: 50%;
    height: 3px;
    width: 3px;
    background: ${colors.text};
    top: 0;
    left: 0;
  }
`;

interface Item {
  id: any;
}

type Props<T extends Item> = {
  items: Array<T>;
  children: (item: T) => ReactNode;
};

const Timeline = <T extends Item>({ items, children }: Props<T>) => (
  <ul>
    {items.map(item => (
      <ListItem key={item.id}>{children(item)}</ListItem>
    ))}
  </ul>
);

export default Timeline;
