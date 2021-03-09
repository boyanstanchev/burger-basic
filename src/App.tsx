import React from 'react';
import Layout from './hoc/Layout/Layout';
import BugerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              render={(routeProps) => (
                <BugerBuilder {...routeProps} />
              )}
            ></Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
