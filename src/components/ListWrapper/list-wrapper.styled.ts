import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 16px;
  font-size: 12px;
  margin: 0 0 4px;
`;

export const ListItem = styled.li`
  color: ${(props) => props.theme.grey};
`;

export const ListTitle = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.grey};
  margin: 6px 0 0 0;
  text-transform: uppercase;
`;
