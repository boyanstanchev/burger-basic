import { PropsWithChildren } from 'react';
import classes from './Button.module.scss';

type ButtonProps = {
  clicked: () => void;
  btnType: 'Success' | 'Danger';
};

const Button = ({
  children,
  clicked,
  btnType,
}: PropsWithChildren<ButtonProps>) => (
  <button
    className={[classes.Button, classes[btnType]].join(' ')}
    onClick={clicked}
  >
    {children}
  </button>
);

export default Button;
