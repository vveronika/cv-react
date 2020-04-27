import styled from 'styled-components';

export const TitleWrapper = styled.div`
  border-bottom: 2px solid ${(props) => props.theme.darkGold};
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 16px;
  text-transform: uppercase;
  color: ${(props) => props.theme.darkGrey};
  font-weight: 500;
  margin-bottom: 10px;
`;
