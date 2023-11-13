import React from "react";
import styles from "./Controls.module.css";
import ReactSwitch from "react-switch";

type ControlsProps = {
  gameState: number;
  buttonState: any;
  playEvent: any;
  hitEvent: any;
  standEvent: any;
  resetEvent: any;
  displayTotal: boolean;
  toggleDisplayTotal: any;
};

const Controls: React.FC<ControlsProps> = ({
  gameState,
  buttonState,
  playEvent,
  hitEvent,
  standEvent,
  resetEvent,
  displayTotal,
  toggleDisplayTotal,
}) => {
  const onBetClick = () => {
    playEvent();
  };

  const toggleScore = (val: any) => {
    toggleDisplayTotal(val);
  };

  const getControls = () => {
    if (gameState === 0) {
      return (
        <div className={styles.controlsContainer}>
          <button onClick={() => onBetClick()} className={styles.button}>
            Play
          </button>
        </div>
      );
    } else {
      return (
        <div className={styles.controlsContainer}>
          <div className={styles.column}>
            <div className={styles.totalContainer}>
              <h2 className={styles.totalText}>Toggle Total</h2>
              <ReactSwitch checked={displayTotal} onChange={toggleScore} />
            </div>
            <div className={styles.row}>
              <button
                onClick={() => hitEvent()}
                disabled={buttonState.hitDisabled}
                className={styles.button}
              >
                Hit
              </button>
              <button
                onClick={() => standEvent()}
                disabled={buttonState.standDisabled}
                className={styles.button}
              >
                Stand
              </button>
              <button
                onClick={() => resetEvent()}
                disabled={buttonState.resetDisabled}
                className={styles.button}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return <>{getControls()}</>;
};

export default Controls;
