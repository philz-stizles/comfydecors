import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createBrowserHistory } from 'history';

// Third-party Authentication Provider
import { Auth0Provider } from '@auth0/auth0-react';

// Context Providers
import { SidebarProvider } from './context/sidebar_context';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';

export const history = createBrowserHistory();

const onRedirectCallback = (appState) => {
  // Use the router's history module to replace the url

  history.replace(appState?.returnTo || window.location.pathname);
};

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_Auth0_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
    onRedirectCallback={onRedirectCallback}
  >
    <SidebarProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </SidebarProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
