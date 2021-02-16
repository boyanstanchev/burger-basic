import classes from './Backdrop.module.scss';

type BackDropProps = {
  show: boolean;
  onClose: () => void;
};

const backdrop: React.FC<BackDropProps> = ({ show, onClose }) => {
  return show ? (
    <div onClick={onClose} className={classes.Backdrop}></div>
  ) : null;
};

export default backdrop;
