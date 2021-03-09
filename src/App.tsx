import React from 'react';
import Layout from './hoc/Layout/Layout';
import BugerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

const App = () => {
  return (
    <div>
      <Layout>
        <BugerBuilder />
        <Checkout />
      </Layout>
    </div>
  );
};

export default App;
