import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.scss';

type CheckoutSummaryProps = {
  ingredients: {
    meat: number;
    cheese: number;
    salad: number;
    bacon: number;
  };
};

const CheckoutSummary = ({ ingredients }: CheckoutSummaryProps) => {
  const cancelHandler = () => {};

  const continueHandler = () => {};

  return (
    <div className={classes.CheckoutSummary}>
      <h1>Hope it testes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>

      <Button btnType="Danger" clicked={cancelHandler}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={continueHandler}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
