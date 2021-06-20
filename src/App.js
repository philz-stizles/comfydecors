import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { history } from '.';
import Auth0Wrapper from './auth/Auth0Wrapper';
import PrivateRoute from './auth/PrivateRoute';
import { Footer, Navbar, Sidebar } from './components';
import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  SingleProductPage,
  ProductsPage,
} from './pages';

// Pages

const App = () => {
  return (
    <Auth0Wrapper>
      <Router history={history}>
        {/* Don't forget to add the history to your router above */}
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/cart" exact>
            <CartPage />
          </Route>

          <PrivateRoute exact path="/checkout">
            <CheckoutPage />
          </PrivateRoute>

          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          <Route path="/products/:id" exact children={<SingleProductPage />} />

          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Auth0Wrapper>
  );
};

export default App;
