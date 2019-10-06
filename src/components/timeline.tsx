import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors, spacing } from "../global-style";

const List = styled.ul`
  margin-left: ${spacing.medium};
`;

const ListItem = styled.li`
  position: relative;
  padding-top: ${spacing.small};

  &:before {
    content: "";
    position: absolute;
    border-left: 1px solid ${colors.dark};
    top: 0;
    left: calc(3px - ${spacing.medium});
    height: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    border: 1px solid ${colors.veryLight};
    border-radius: 50%;
    height: 3px;
    width: 3px;
    background: ${colors.veryLight};
    top: 0;
    left: calc(1px - ${spacing.medium});
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
  <List>
    {items.map(item => (
      <ListItem key={item.id}>{children(item)}</ListItem>
    ))}
  </List>
);

export default Timeline;
