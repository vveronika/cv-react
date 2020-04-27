import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  padding: 40px 30px 20px;
  background: ${(props) => props.theme.lightGold};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20%;

  @media (max-width: 1024px) {
    padding: 20px 5%;
  }
`;

export const HeaderBorder = styled.div`
  background-color: ${(props) => props.theme.white};
  border: 3px solid ${(props) => props.theme.darkGold};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  height: 130px;
  text-transform: uppercase;

  @media (max-width: 550px) {
    padding: 0;
  }
`;

export const ContactWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;
