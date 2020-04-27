import React from 'react';
import { FooterWrapper } from 'components/Footer/footer.styled';

interface Props {
  footerContent: string;
}

const Footer: React.FC<Props> = (props) => <FooterWrapper>{props.footerContent}</FooterWrapper>;

export default Footer;
