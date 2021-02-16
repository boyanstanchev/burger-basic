import Button from '../../../components/UI/Button/Button';

type OrderSummaryProps = {
  ingredients: {
    [key: string]: number;
  };
  purchaseCanceled: () => void;
  puchaseContinue: () => void;
};

const orderSummary: React.FC<OrderSummaryProps> = ({
  ingredients,
  purchaseCanceled,
  puchaseContinue,
}) => {
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
      <p>Continue to checkout?</p>
      <Button clicked={purchaseCanceled} btnType={'Danger'}>
        CANCEL
      </Button>
      <Button clicked={puchaseContinue} btnType={'Success'}>
        CONTINUE
      </Button>
    </>
  );
};

export default orderSummary;
