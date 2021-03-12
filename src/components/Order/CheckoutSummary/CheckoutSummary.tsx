import { useState } from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.scss';
import axios from '../../../axios-orders';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type CheckoutSummaryProps = RouteComponentProps & {
  ingredients: {
    meat: number;
    cheese: number;
    salad: number;
    bacon: number;
  };
};

const CheckoutSummary = ({
  ingredients,
  history,
}: CheckoutSummaryProps) => {
  const [loading, setLoading] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  const cancelHandler = () => {
    history.push('/');
  };

  const continueHandler = () => {
    setLoading(true);

    const order = {
      ingredients,
      // price: this.state.totalPrice,
      customer: {
        name: 'Boyan Stanchev',
        adress: {
          street: 'Aleksi Rilets 17',
          zipCode: 1756,
          country: 'Bulgaria',
        },
        email: 'bstanchev@arena.com',
      },
      deliveryMethod: 'home adress',
    };

    axios
      .post('/orders.json', order)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setPurchasing(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setPurchasing(false);
      });
  };

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

export default withRouter(CheckoutSummary);
