import React from "react";
import styles from "./Status.module.css";
import Controls from "../Controls";


type StatusProps = {
  message: string;
  choice: string;
  gameState: number;
  buttonState: any;
  playGame: any;
  hit: any;
  stand: any;
  resetGame: any;
  displayTotal: boolean;
  toggleDisplayTotal: any;
};

const Status: React.FC<StatusProps> = ({
  message,
  choice,
  gameState,
  buttonState,
  playGame,
  hit,
  stand,
  resetGame,
  displayTotal,
  toggleDisplayTotal,
}) => {
  return (
    <div className={styles.statusContainer}>
      <div className={styles.status}>
        <div>
          <h1 className={styles.value}>{message}</h1>
          <h1 className={styles.value}>{choice}</h1>
        </div>
        <Controls
          gameState={gameState}
          buttonState={buttonState}
          playEvent={playGame}
          hitEvent={hit}
          standEvent={stand}
          resetEvent={resetGame}
          displayTotal={displayTotal}
          toggleDisplayTotal={toggleDisplayTotal}
        ></Controls>
      </div>
    </div>
  );
};

export default Status;
