import React from 'react';
import SectionTitle from 'components/SectionTitle';

interface Props {
  title: string;
}

const SectionItem: React.FC<Props> = (props) => {
  return (
    <>
      <SectionTitle title={props.title} />
      {props.children}
    </>
  );
};

export default SectionItem;
