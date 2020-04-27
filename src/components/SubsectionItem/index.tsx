import React from 'react';
import { SubsectionWrapper } from 'components/SubsectionItem/subsection-item.styled';
import SubsectionTitle from 'components/SubsectionTitle';
import BaseText from 'components/BaseText';

interface Props {
  title: string;
  firstLine?: string;
  secondLine?: string;
}

const SubsectionItem: React.FC<Props> = (props) => {
  return (
    <SubsectionWrapper>
      <SubsectionTitle title={props.title} />
      {props.firstLine && <BaseText text={props.firstLine} />}
      {props.secondLine && <BaseText text={props.secondLine} />}
      {props.children}
    </SubsectionWrapper>
  );
};

export default SubsectionItem;
