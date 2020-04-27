import React from 'react';
import {
  List,
  ListItem,
  ListTitle,
} from 'components/ListWrapper/list-wrapper.styled';

interface Props {
  items: string[];
  listTitle?: string;
}

const ListWrapper: React.FC<Props> = (props) => {
  return (
    <>
      {props.listTitle && <ListTitle>{props.listTitle}</ListTitle>}
      <List>
        {props.items.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
    </>
  );
};

export default ListWrapper;
