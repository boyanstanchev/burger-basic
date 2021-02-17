import classes from './Sidebar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

type SidebarProps = {
  sidebarClose: () => void;
  open: boolean;
};

const sidebar: React.FC<SidebarProps> = ({ sidebarClose, open }) => {
  let sidenarClasses = [classes.Sidebar, classes.Close];

  if (open) {
    sidenarClasses = [classes.Sidebar, classes.Open];
  }

  return (
    <>
      <Backdrop show={open} onClose={sidebarClose} />
      <div className={sidenarClasses.join(' ')}>
        <div style={{ height: '11%', marginBottom: '32px' }}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sidebar;
