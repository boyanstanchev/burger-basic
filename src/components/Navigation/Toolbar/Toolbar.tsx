import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

type ToolbarProps = {};

const toolbar: React.FC<ToolbarProps> = (props: any) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <div style={{ height: '80%' }}>
        <Logo />
      </div>

      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
