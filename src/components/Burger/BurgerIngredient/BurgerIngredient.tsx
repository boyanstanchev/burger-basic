import classes from './BurgerIngredient.module.scss';

export enum Ingredient {
  MEAT = 'meat',
  CHEESE = 'cheese',
  SALAD = 'salad',
  BACON = 'bacon',
}

export enum BaseIngredients {
  BREAD_BOTTOM = 'bread-bottom',
  BREAD_TOP = 'bread-top',
}

interface BurgerIngredientProps {
  type: Ingredient | BaseIngredients;
}

const burgerIngredient = ({ type }: BurgerIngredientProps) => {
  let ingredient = null;

  switch (type) {
    case BaseIngredients.BREAD_BOTTOM:
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case BaseIngredients.BREAD_TOP:
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case Ingredient.MEAT:
      ingredient = <div className={classes.Meat}></div>;
      break;
    case Ingredient.CHEESE:
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case Ingredient.SALAD:
      ingredient = <div className={classes.Salad}></div>;
      break;
    case Ingredient.BACON:
      ingredient = <div className={classes.Bacon}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default burgerIngredient;
