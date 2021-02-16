import { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { Ingredient } from '../../components/Burger/BurgerIngredient/BurgerIngredient';

type BurgerBuilderState = {
  ingredients: {
    [key in Ingredient]: number;
  };
  totalPrice: number;
  puchasable: boolean;
};

const INGREDIENT_PRICES: {
  [key in Ingredient]: number;
} = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BugerBuilder extends Component {
  // constructor(props: any) {
  //   super(props);
  // }

  state: BurgerBuilderState = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    puchasable: false,
  };

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
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });

    this.updatePuchaseState();
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
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });

    this.updatePuchaseState();
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

  render() {
    const disabledInfo: any = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          disabledInfo={disabledInfo}
          totalPrice={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          puchasable={this.state.puchasable}
        />
      </>
    );
  }
}

export default BugerBuilder;
