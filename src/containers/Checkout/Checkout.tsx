import { useState } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

type CheckoutProps = {};

const Checkout = ({}: CheckoutProps) => {
  const [ingredients, setIngredients] = useState({
    meat: 5,
    cheese: 5,
    salad: 5,
    bacon: 5,
  });

  return (
    <div>
      <CheckoutSummary ingredients={ingredients} />
    </div>
  );
};

export default Checkout;
