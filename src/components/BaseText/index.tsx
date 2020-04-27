import React from 'react';
import { Text } from 'components/BaseText/base-text.styled';

interface Props {
  text: string;
}

const BaseText: React.FC<Props> = (props) => <Text>{props.text}</Text>;

export default BaseText;
