import React from "react";
import styles from "./Status.module.css";
import Controls from "../Controls";

type StatusProps = {
  message: string;
  gameState: number;
  buttonState: any;
  playGame: any;
  hit: any;
  stand: any;
  resetGame: any;
};

const Status: React.FC<StatusProps> = ({
  message,
  gameState,
  buttonState,
  playGame,
  hit,
  stand,
  resetGame,
}) => {
  return (
    <div className={styles.statusContainer}>
      <div className={styles.status}>
        <h1 className={styles.value}>{message}</h1>
        <Controls
          gameState={gameState}
          buttonState={buttonState}
          playEvent={playGame}
          hitEvent={hit}
          standEvent={stand}
          resetEvent={resetGame}
        ></Controls>
      </div>
    </div>
  );
};

export default Status;
