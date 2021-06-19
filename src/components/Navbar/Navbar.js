import React from 'react';
import { Hamburger, Logo, NavLink } from '..';
import { useAuth0 } from '@auth0/auth0-react';
import { useSidebarContext } from '../../context/sidebar_context';
import links from '../../lib/nav-links';
import CartButtons from '../CartButtons/CartButtons';
import { NavbarWrapper } from './Navbar.styles';

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const sidebarContext = useSidebarContext();
  const { openSidebar } = sidebarContext;
  return (
    <NavbarWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <Hamburger onClick={openSidebar} />
        </div>
        <ul className="nav-links">
          {links.map((link) => (
            <NavLink key={link.url} {...link} />
          ))}
          {isAuthenticated && <NavLink url="/checkout" label="checkout" />}
        </ul>
        <CartButtons />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
