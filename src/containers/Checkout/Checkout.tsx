import { useState } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

type CheckoutProps = {};

const Checkout = ({}: CheckoutProps) => {
  const [ingredients, setIngredients] = useState({
    meat: 1,
    cheese: 1,
    salad: 1,
    bacon: 1,
  });

  return (
    <div>
      <CheckoutSummary ingredients={ingredients} />
    </div>
  );
};

export default Checkout;
