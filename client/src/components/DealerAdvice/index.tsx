import React from "react";
import styles from "./DealerAdvice.module.css";


type DealerAdviceProps = {
    message: string;
};

const DealerAdvice: React.FC<DealerAdviceProps> = ({
  message,
}) => {
  return (
    <div className={styles.statusContainer}>
      <div className={styles.status}>
        <div>
            <h1 className={styles.value}>Dealer says:</h1>
          <h3 className={styles.value}>{message}</h3>
        </div>
      </div>
    </div>
  );
};

export default DealerAdvice;