import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SidebarToggle from '../Sidebar/SidebarToggle/SidebarToggle';

type ToolbarProps = {
  openSidebar: () => void;
};

const toolbar: React.FC<ToolbarProps> = ({ openSidebar }) => {
  return (
    <header className={classes.Toolbar}>
      <SidebarToggle clicked={openSidebar}>MENU</SidebarToggle>
      <div style={{ height: '80%' }}>
        <Logo />
      </div>

      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
