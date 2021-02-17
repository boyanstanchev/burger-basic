import { PropsWithChildren } from 'react';
import classes from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

const layout = (props: PropsWithChildren<any>) => {
  return (
    <>
      <Toolbar />
      <Sidebar />
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default layout;
