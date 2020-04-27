import React from 'react';
import { Title } from 'components/SubsectionTitle/subsection-title.styled';

interface Props {
  title: string;
}

const SubsectionTitle: React.FC<Props> = (props) => <Title>{props.title}</Title>;

export default SubsectionTitle;
