import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 550px) {
    margin-bottom: 5px;
  }
`;

export const IconWrapper = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.darkGold};
  margin-right: 5px;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 15px;
  & path {
    fill: ${(props) => props.theme.white};
  }
`;

export const TextWrapper = styled.a`
  font-size: 14px;
  color: ${(props) => props.theme.darkGrey};
  text-decoration: none;
`;
