import classes from './Logo.module.scss';
import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="Burger Logo" />
    </div>
  );
};

export default Logo;
