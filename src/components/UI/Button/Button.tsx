import classes from './Button.module.scss';

type ButtonProps = {
  clicked: () => void;
  btnType: 'Success' | 'Danger';
};

const button: React.FC<ButtonProps> = ({
  children,
  clicked,
  btnType,
}) => (
  <button
    className={[classes.Button, classes[btnType]].join(' ')}
    onClick={clicked}
  >
    {children}
  </button>
);

export default button;
