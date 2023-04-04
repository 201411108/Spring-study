import { Component, ComponentProps, For, JSX } from 'solid-js';
import { styled } from 'solid-styled-components';

interface NavItemProps {
  title: string;
  href: string;
}

const Li = styled('li')`
  text-align: center;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

const NavItem: Component<NavItemProps> = ({ title, href }) => {
  return (
    <Li>
      <a href={href}>{title}</a>
    </Li>
  );
};

interface HeaderProps extends ComponentProps<'header'> {}

const NavContainer = styled('nav')`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #007bff;
`;

const Ul = styled('ul')`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
`;

const NAV_ITEMS: NavItemProps[] = [
  { title: '상품 등록', href: '/admin/item/new' },
  { title: '상품 관리', href: '/admin/items' },
  { title: '장바구니', href: '/cart' },
  { title: '구매이력', href: '/orders' },
  { title: '로그인', href: '/members/login' },
  { title: '로그아웃', href: '/members/logout' },
];

const Header: Component<HeaderProps> = (props) => (
  <header {...props}>
    <NavContainer>
      <a
        href="/"
        style={{
          'font-size': '1.25rem',
          color: '#fff',
          display: 'inline-block',
          'text-decoration': 'none',
        }}
      >
        Shop
      </a>
      <Ul>
        <For each={NAV_ITEMS} fallback={<div>Loading...</div>}>
          {(item) => <NavItem {...item} />}
        </For>
      </Ul>
      <form>
        <input type="search" placeholder="Search" aria-label="Search" />
        <button type="submit">Search</button>
      </form>
    </NavContainer>
  </header>
);

export default Header;
