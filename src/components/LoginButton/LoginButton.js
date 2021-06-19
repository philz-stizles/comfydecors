import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { FaUserPlus } from 'react-icons/fa';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <LoginButtonWrapper onClick={loginWithRedirect}>
      Login <FaUserPlus />
    </LoginButtonWrapper>
  );
};

const LoginButtonWrapper = styled.button`
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

export default LoginButton;
