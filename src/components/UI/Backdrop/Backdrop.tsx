import classes from './Backdrop.module.scss';

type BackDropProps = {
  show: boolean;
  onClose: () => void;
};

const backdrop = ({ show, onClose }: BackDropProps) => {
  return show ? (
    <div onClick={onClose} className={classes.Backdrop}></div>
  ) : null;
};

export default backdrop;
