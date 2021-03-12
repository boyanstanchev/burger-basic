import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import { PropsWithChildren, useState } from 'react';

const Layout = (props: PropsWithChildren<{}>) => {
  const [showSidebar, setShowsidebar] = useState(false);

  const sidebarCloseHandler = () => setShowsidebar(false);

  const sidebarToggleHandler = () => setShowsidebar(!showSidebar);

  return (
    <>
      <Toolbar openSidebar={sidebarToggleHandler} />
      <Sidebar
        open={showSidebar}
        sidebarClose={sidebarCloseHandler}
      />
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default Layout;
