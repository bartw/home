import React, { ReactNode } from "react";
import styled from "styled-components";
import { spacing } from "../global-style";

const List = styled.ul`
  margin-top: ${spacing.small};
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin-right: ${spacing.small};
  margin-bottom: ${spacing.small};
`;

interface Item {
  id: any;
}

type Props<T extends Item> = {
  items: Array<T>;
  children: (item: T) => ReactNode;
};

const WrapList = <T extends Item>({ items, children }: Props<T>) => (
  <List>
    {items.map((item) => (
      <ListItem key={item.id}>{children(item)}</ListItem>
    ))}
  </List>
);

export default WrapList;
