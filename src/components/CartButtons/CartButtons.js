import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

import { useSidebarContext } from '../../context/sidebar_context';
// import { useProductsContext } from '../context/products_context';
// import { useCartContext } from '../context/cart_context';
import { CartLink, LoginButton, LogoutButton } from '..';

const CartButtons = () => {
  const { isAuthenticated } = useAuth0();
  const sidebarContext = useSidebarContext();
  const { closeSidebar } = sidebarContext;
  return (
    <Wrapper className="cart-btn-wrapper">
      <CartLink url="/cart" label="Cart" onClick={closeSidebar} />
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
`;
export default CartButtons;
