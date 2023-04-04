import { Component, ComponentProps } from 'solid-js';
import { styled } from 'solid-styled-components';

const StyledFooter = styled('footer')`
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 15px 0;
  text-align: center;
`;

const Footer: Component<ComponentProps<'footer'>> = (props) => (
  <StyledFooter {...props}>2022 Shopping Mal Example Website</StyledFooter>
);

export default Footer;
