import React from 'react';
import {
  TitleWrapper,
  Title,
} from 'components/SectionTitle/section-title.styled';

interface Props {
  title: string;
}

const SectionTitle: React.FC<Props> = (props) => {
  return (
    <TitleWrapper>
      <Title>{props.title}</Title>
    </TitleWrapper>
  );
};

export default SectionTitle;
