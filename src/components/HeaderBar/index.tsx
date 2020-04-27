import React from 'react';
import {
  HeaderWrapper,
  HeaderBorder,
  ContactWrapper,
} from 'components/HeaderBar/header-bar.styled';
import PageTitle from 'components/PageTitle';
import PageSubtitle from 'components/PageSubtitle';
import ContactItem from 'components/ContactItem';

interface Props {
  title: string;
  subtitle: string;
}

const HeaderBar: React.FC<Props> = (props) => {
  return (
    <HeaderWrapper>
      <HeaderBorder>
        <PageTitle title={props.title} />
        <PageSubtitle subtitle={props.subtitle} />
      </HeaderBorder>
      <ContactWrapper>
        <ContactItem icon="envelope" contactDetail="vv.fiedoruk@gmail.com" />
        <ContactItem
          icon={['fab', 'github']}
          contactDetail="github.com/vveronika"
        />
        <ContactItem icon="mobile-alt" contactDetail="+48 537 509 226" />
      </ContactWrapper>
    </HeaderWrapper>
  );
};

export default HeaderBar;
