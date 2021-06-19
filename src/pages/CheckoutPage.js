import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <CheckoutPageWrapper className="page"></CheckoutPageWrapper>
    </main>
  );
};

const CheckoutPageWrapper = styled.section``;

export default CheckoutPage;
