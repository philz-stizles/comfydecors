import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartLink = ({ url, label }) => {
  return (
    <CartLinkWrapper to={url}>
      {label}{' '}
      <span className="cart-container">
        <FaShoppingCart />
        <span className="cart-value">12</span>
      </span>
    </CartLinkWrapper>
  );
};

const CartLinkWrapper = styled(Link)`
  color: var(--clr-grey-1);
  font-size: 1.5rem;
  letter-spacing: var(--spacing);
  color: var(--clr-grey-1);
  display: flex;
  align-items: center;

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;

    svg {
      height: 1.6rem;
      margin-left: 5px;
    }

    .cart-value {
      position: absolute;
      top: -10px;
      right: -16px;
      background: var(--clr-primary-5);
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 0.75rem;
      color: var(--clr-white);
      padding: 12px;
    }
  }
`;
export default CartLink;