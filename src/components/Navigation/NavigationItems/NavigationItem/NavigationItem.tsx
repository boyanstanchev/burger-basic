import classes from './NavigationItem.module.scss';

type NavigationitemProps = {
  link: string;
  active: boolean;
};

const navigationItem: React.FC<NavigationitemProps> = ({
  children,
  link,
  active,
}) => {
  return (
    <li className={classes.NavigationItem}>
      <a className={active ? 'active' : ''} href={link}>
        {children}
      </a>
    </li>
  );
};

export default navigationItem;
