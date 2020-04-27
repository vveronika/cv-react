import React from 'react';
import {
  ItemWrapper,
  IconWrapper,
  Icon,
  TextWrapper,
} from 'components/ContactItem/contact-item.styled';

interface Props {
  icon: ['fab', 'github'] | 'mobile-alt' | 'envelope';
  contactDetail: string;
}

const ContactItem: React.FC<Props> = (props) => {
  return (
    <ItemWrapper>
      <IconWrapper>
        <Icon icon={props.icon} />
      </IconWrapper>
      <TextWrapper>{props.contactDetail}</TextWrapper>
    </ItemWrapper>
  );
};

export default ContactItem;
