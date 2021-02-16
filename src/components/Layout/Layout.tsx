import { PropsWithChildren } from 'react';
import classes from './Layout.module.scss';

const layout = (props: PropsWithChildren<any>) => {
  return (
    <>
      <div>Header, ect.</div>
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default layout;
