import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { FaSignOutAlt } from 'react-icons/fa';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Wrapper
      onClick={() => {
        logout({ returnTo: window.location.origin });
      }}
    >
      Logout <FaSignOutAlt />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--clr-grey-1);
  letter-spacing: var(--spacing);

  svg {
    margin-left: 5px;
  }
`;

export default LogoutButton;
