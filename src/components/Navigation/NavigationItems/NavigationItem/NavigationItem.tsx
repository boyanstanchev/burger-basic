import { PropsWithChildren } from 'react';
import classes from './NavigationItem.module.scss';

type NavigationitemProps = {
  link: string;
  active: boolean;
};

const navigationItem = ({
  children,
  link,
  active,
}: PropsWithChildren<NavigationitemProps>) => {
  return (
    <li className={classes.NavigationItem}>
      <a className={active ? 'active' : ''} href={link}>
        {children}
      </a>
    </li>
  );
};

export default navigationItem;
