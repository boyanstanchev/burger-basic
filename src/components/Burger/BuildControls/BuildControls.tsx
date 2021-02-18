import React from 'react';
import { Ingredient } from '../BurgerIngredient/BurgerIngredient';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.scss';

type BuildControlsProps = {
  ingredientAdded: (type: Ingredient) => void;
  ingredientRemoved: (type: Ingredient) => void;
  onOrder: () => void;
  disabledInfo: {
    [key: string]: boolean;
  };
  totalPrice: number;
  purchasable: boolean;
};

type Controls = {
  label: string;
  type: Ingredient;
};

const controls: Controls[] = [
  { label: 'Salad', type: Ingredient.SALAD },
  { label: 'Bacon', type: Ingredient.BACON },
  { label: 'Cheese', type: Ingredient.CHEESE },
  { label: 'Meat', type: Ingredient.MEAT },
];

const buildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabledInfo,
  totalPrice,
  purchasable,
  onOrder,
}: BuildControlsProps) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{totalPrice.toFixed(2)}</strong>
      </p>

      {controls.map((c) => (
        <BuildControl
          key={c.label}
          disabled={disabledInfo[c.type]}
          label={c.label}
          added={() => ingredientAdded(c.type)}
          removed={() => ingredientRemoved(c.type)}
        />
      ))}

      <button
        className={classes.OrderButton}
        onClick={() => onOrder()}
        disabled={!purchasable}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
