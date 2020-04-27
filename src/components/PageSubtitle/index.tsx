import React from 'react';
import { Subtitle } from 'components/PageSubtitle/page-subtitle.styled';

interface Props {
  subtitle: string;
}

const PageSubtitle: React.FC<Props> = (props) => <Subtitle>{props.subtitle}</Subtitle>;

export default PageSubtitle;
