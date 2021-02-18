import { Component } from 'react';
import Button from '../../../components/UI/Button/Button';

type OrderSummaryProps = {
  ingredients: {
    [key: string]: number;
  };
  totalPrice: number;
  purchaseCanceled: () => void;
  puchaseContinue: () => void;
};

class OrderSummary extends Component<OrderSummaryProps, {}> {
  componentDidUpdate() {
    console.log('[OrderSummary] Will Update');
  }

  render() {
    const {
      ingredients,
      purchaseCanceled,
      puchaseContinue,
      totalPrice,
    } = this.props;

    const ingredientSummary = Object.keys(ingredients).map((i) => (
      <li key={i}>
        <span style={{ textTransform: 'capitalize' }}>{i}</span>:{' '}
        {ingredients[i]}
      </li>
    ));

    return (
      <>
        <h3>Your Order</h3>
        <p>Yummy burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button clicked={purchaseCanceled} btnType={'Danger'}>
          CANCEL
        </Button>
        <Button clicked={puchaseContinue} btnType={'Success'}>
          CONTINUE
        </Button>
      </>
    );
  }
}

export default OrderSummary;
