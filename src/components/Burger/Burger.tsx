import BurgerIngredient, {
  Ingredient,
  BaseIngredients,
} from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.scss';

interface BurgerProps {
  ingredients: {
    [key in Ingredient]: number;
  };
}

const burger: React.FC<BurgerProps> = ({ ingredients }) => {
  let transformedIngredients:
    | JSX.Element[]
    | JSX.Element = Object.keys(ingredients)
    .map((iK) =>
      // @ts-ignore
      [...Array(ingredients[iK])].map((_, i) => (
        <BurgerIngredient key={iK + i} type={iK as any} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), []);

  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={BaseIngredients.BREAD_TOP} />
      {transformedIngredients}
      <BurgerIngredient type={BaseIngredients.BREAD_BOTTOM} />
    </div>
  );
};

export default burger;
