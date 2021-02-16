import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

type ModalProps = {
  show: boolean;
  onBackdropClick: () => void;
};

const modal: React.FC<ModalProps> = ({
  show,
  children,
  onBackdropClick,
}) => {
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
};

export default modal;
