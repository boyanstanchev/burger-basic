import classes from './Sidebar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

type SidebarProps = {};

const sidebar: React.FC<SidebarProps> = (props: any) => {
  return (
    <div className={classes.Sidebar}>
      <div style={{ height: '11%', marginBottom: '32px' }}>
        <Logo />
      </div>

      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sidebar;
