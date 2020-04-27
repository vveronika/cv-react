import styled from 'styled-components';

export const ContentWrapper = styled.div`
  padding: 0 20%;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    padding: 0 5%;
  }
`;

export const LeftColumn = styled.div`
  flex: 2;
  padding-right: 80px;

  @media (max-width: 1024px) {
    padding-right: 0;
  }
`;

export const RightColumn = styled.div`
  flex: 3;
`;
