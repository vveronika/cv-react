import styled from 'styled-components';

export const FooterWrapper = styled.div`
  padding: 0 20%;
  font-size: 10px;
  color: ${(props) => props.theme.grey};
  background: ${(props) => props.theme.lightGold};
  display: flex;
  align-items: center;
  height: 47px;
  margin-top: 35px;

  @media (max-width: 1024px) {
    padding: 0 5%;
  }
`;
