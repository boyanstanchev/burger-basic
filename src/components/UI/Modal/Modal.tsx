import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';
import React, { Component } from 'react';

type ModalProps = {
  show: boolean;
  onBackdropClick: () => void;
};

class Modal extends Component<ModalProps, {}> {
  

  shouldComponentUpdate(nextProps: ) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    const { show, children, onBackdropClick } = this.props;

    return (
      <>
        <Backdrop onClose={onBackdropClick} show={show} />
        <div
          className={classes.Modal}
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0',
          }}
        >
          {children}
        </div>
      </>
    );
  }
}

export default Modal;
