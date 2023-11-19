import React from "react";
import styles from "./Controls.module.css";
import ReactSwitch from "react-switch";
import { useKeyPress } from "../../modules/useKeyPress";

type ControlsProps = {
  gameState: number;
  buttonState: any;
  playEvent: any;
  hitEvent: any;
  standEvent: any;
  resetEvent: any;
  displayTotal: boolean;
  dealerHelp: boolean;
  toggleDisplayTotal: any;
  toggleDealerHelp: any;
};

const Controls: React.FC<ControlsProps> = ({
  gameState,
  buttonState,
  playEvent,
  hitEvent,
  standEvent,
  resetEvent,
  displayTotal,
  dealerHelp,
  toggleDisplayTotal,
  toggleDealerHelp,
}) => {
  const onBetClick = () => {
    playEvent();
  };

  const toggleScore = (val: boolean) => {
    toggleDisplayTotal(val);
  };

  const toggleHelp = (val: boolean) => {
    toggleDealerHelp(val);
  };

  const onKeyPress = (event: any) => {
    if (event.key === 'a' && !buttonState.hitDisabled) {
      hitEvent();
    } else if (event.key === 's' && !buttonState.standDisabled) {
      standEvent();
    } else if (event.key === 'd' && !buttonState.resetDisabled) {
      resetEvent();
    } else if (event.key === 'w') {
      toggleScore(!displayTotal);
    } else if (event.key === 'e') {
      toggleHelp(!dealerHelp);
    }
  }

  useKeyPress(['a','s','d','w','e'], onKeyPress);

  const getControls = () => {
    if (gameState === 0) {
      return (
        <div className={styles.controlsContainer}>
          <button
            onClick={() => onBetClick()}
            className={styles.button}
          >
            Play
          </button>
        </div>
      );
    } else {
      return (
        <div className={styles.controlsContainer}>
          <div className={styles.column}>
            <div className={styles.toggleContainer}>
              <h2 className={styles.toggleText}>Toggle Total (W)</h2>
              <ReactSwitch checked={displayTotal} onChange={toggleScore} />
            </div>
            <div className={styles.toggleContainer}>
              <h2 className={styles.toggleText}>Toggle Help (E)</h2>
              <ReactSwitch checked={dealerHelp} onChange={toggleHelp} />
            </div>
            <div className={styles.row}>
              <button
                onClick={() => hitEvent()}
                disabled={buttonState.hitDisabled}
                className={styles.button}
              >
                Hit (A)
              </button>
              <button
                onClick={() => standEvent()}
                disabled={buttonState.standDisabled}
                className={styles.button}
              >
                Stand (S)
              </button>
              <button
                onClick={() => resetEvent()}
                disabled={buttonState.resetDisabled}
                className={styles.button}
              >
                New Hand (D)
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
