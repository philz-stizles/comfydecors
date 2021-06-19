import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = ({ url, label }) => {
  return (
    <NavLinkWrapper>
      <Link to={url}>{label}</Link>
    </NavLinkWrapper>
  );
};

export const NavLinkWrapper = styled.li`
  li {
    margin: 0 0.5rem;
  }

  a {
    color: var(--clr-grey-3);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    padding: 0.5rem;

    &:hover {
      border-bottom: 2px solid var(--clr-primary-7);
    }
  }
`;

export default NavLink;
