import { useEffect, useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { Ingredient } from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { AxiosResponse } from 'axios';
import { RouteComponentProps } from 'react-router-dom';

type BurgerBuilderState = {
  ingredients: {
    [key in Ingredient]: number;
  };
  totalPrice: number;
  purchasable: boolean;
  purchasing: boolean;
  loading: boolean;
};

const INGREDIENT_PRICES: {
  [key in Ingredient]: number;
} = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const BurgerBuilder = (props: RouteComponentProps<{}>) => {
  const [ingredients, setIngredients] = useState<
    {
      [key in Ingredient]: number;
    }
  >(null);
  const [totalPrice, setTotalPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const url =
      'https://react-burger-f8e1e-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json';

    axios
      .get(url)
      .then(
        ({
          data,
        }: AxiosResponse<{ [key in Ingredient]: number }>) => {
          setIngredients(data);
        }
      );
  }, []);

  const addIngredientHandler = (type: Ingredient) => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;

    setTotalPrice(newPrice);
    setIngredients(updatedIngredients);

    updatePuchaseState();
  };

  const updatePuchaseState = () => {
    const sum = Object.keys(ingredients)
      .map((k) => ingredients[k as Ingredient])
      .reduce((sum, el) => sum + el, 0);

    setPurchasable(sum > 0);
  };

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const removeIngredientHandler = (type: Ingredient) => {
    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceDeduction;

    setTotalPrice(newPrice);
    setIngredients(updatedIngredients);

    updatePuchaseState();
  };

  const backdropClosehandler = () => {
    setPurchasing(false);
  };

  const puchaseContinueHandler = () => {
    props.history.push('/checkout');
  };

  const disabledInfo: any = {
    ...ingredients,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary = null;

  let burger = <Spinner />;

  if (ingredients) {
    burger = (
      <>
        <Burger ingredients={ingredients} />
        <BuildControls
          disabledInfo={disabledInfo}
          totalPrice={totalPrice}
          ingredientAdded={addIngredientHandler}
          ingredientRemoved={removeIngredientHandler}
          purchasable={purchasable}
          onOrder={purchaseHandler}
        />
      </>
    );

    orderSummary = (
      <OrderSummary
        purchaseCanceled={backdropClosehandler}
        puchaseContinue={puchaseContinueHandler}
        totalPrice={totalPrice}
        ingredients={ingredients}
      />
    );
  }

  if (loading) {
    orderSummary = <Spinner />;
  }

  return (
    <>
      <Modal onBackdropClick={backdropClosehandler} show={purchasing}>
        {orderSummary}
      </Modal>
      {burger}
    </>
  );
};

export default withErrorHandler(BurgerBuilder, axios);
