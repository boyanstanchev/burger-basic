import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import { Component } from 'react';

type LayoutState = {
  showSidebar: boolean;
};

type LayoutProps = {};

class Layout extends Component<LayoutProps, LayoutState> {
  state = {
    showSidebar: false,
  };

  sidebarCloseHandler = () => {
    this.setState({ showSidebar: false });
  };

  sidebarToggleHandler = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <>
        <Toolbar openSidebar={this.sidebarToggleHandler} />
        <Sidebar
          open={this.state.showSidebar}
          sidebarClose={this.sidebarCloseHandler}
        />
        <main className={classes.content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
