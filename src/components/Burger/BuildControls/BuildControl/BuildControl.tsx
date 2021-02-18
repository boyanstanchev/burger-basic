import classes from './BuildControl.module.scss';

type BuildControlProps = {
  label: string;
  disabled: boolean;
  added: () => void;
  removed: () => void;
};

const buildControl = ({
  label,
  disabled,
  added,
  removed,
}: BuildControlProps) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button
        className={classes.Less}
        onClick={removed}
        disabled={disabled}
      >
        Less
      </button>
      <button className={classes.More} onClick={added}>
        More
      </button>
    </div>
  );
};

export default buildControl;
