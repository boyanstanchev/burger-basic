import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.scss';

type NavigationitemProps = {
  link: string;
};

const NavigationItem = ({
  children,
  link,
}: PropsWithChildren<NavigationitemProps>) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={link} activeClassName="active">
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
