import { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { Ingredient } from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { AxiosResponse } from 'axios';

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

class BugerBuilder extends Component<{}, BurgerBuilderState> {
  state = {
    ingredients: null as any,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
  };

  componentDidMount() {
    const url =
      'https://react-burger-f8e1e-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json';

    axios
      .get(url)
      .then(
        ({
          data,
        }: AxiosResponse<{ [key in Ingredient]: number }>) => {
          this.setState({ ingredients: data });
        }
      );
  }

  addIngredientHandler = (type: Ingredient) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState(
      {
        totalPrice: newPrice,
        ingredients: updatedIngredients,
      },
      () => {
        this.updatePuchaseState();
      }
    );
  };

  removeIngredientHandler = (type: Ingredient) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState(
      {
        totalPrice: newPrice,
        ingredients: updatedIngredients,
      },
      () => {
        this.updatePuchaseState();
      }
    );
  };

  updatePuchaseState() {
    const ingredients = {
      ...this.state.ingredients,
    };

    const sum = Object.keys(ingredients)
      .map((k) => ingredients[k as Ingredient])
      .reduce((sum, el) => sum + el, 0);

    this.setState({
      purchasable: sum > 0,
    });
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  backdropClosehandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  puchaseContinueHandler = () => {
    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
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
        this.setState({ loading: false, purchasing: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    const disabledInfo: any = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            disabledInfo={disabledInfo}
            totalPrice={this.state.totalPrice}
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            purchasable={this.state.purchasable}
            onOrder={this.purchaseHandler}
          />
        </>
      );

      orderSummary = (
        <OrderSummary
          purchaseCanceled={this.backdropClosehandler}
          puchaseContinue={this.puchaseContinueHandler}
          totalPrice={this.state.totalPrice}
          ingredients={this.state.ingredients}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Modal
          onBackdropClick={this.backdropClosehandler}
          show={this.state.purchasing}
        >
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

export default withErrorHandler(BugerBuilder, axios);
