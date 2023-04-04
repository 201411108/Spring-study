import { Component, ComponentProps } from 'solid-js';
import Header from './Header';
import { styled } from 'solid-styled-components';
import Footer from './Footer';

interface LayoutProps extends ComponentProps<'div'> {}

const Container = styled('div')`
  position: relative;
  min-height: 100%;
  margin: 0;
`;

const Content = styled('div')`
  margin: 50px 200px 100px 200px;
`;

const Layout: Component<LayoutProps> = ({ children, ...otherProps }) => {
  return (
    <Container {...otherProps}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;
