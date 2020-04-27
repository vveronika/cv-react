import React from 'react';
import { Title } from 'components/PageTitle/page-title.styled';

interface Props {
  title: string;
}

const PageTitle: React.FC<Props> = (props) => <Title>{props.title}</Title>;

export default PageTitle;
