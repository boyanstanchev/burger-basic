import classes from './SidebarToggle.module.scss';

type SidebarToggleProps = {
  clicked: () => void;
};

const SidebarToggle = ({ clicked }: SidebarToggleProps) => {
  return (
    <div onClick={clicked} className={classes.SidebarToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SidebarToggle;
