import React from "react";
import styles from "./Card.module.css";
import { CardColor, CardStyle, useCardContext } from "../../modules/cardColor";

type CardProps = {
  value: string;
  suit: string;
  hidden: boolean;
};

const Card: React.FC<CardProps> = ({ value, suit, hidden }) => {
  const { cardColor, cardStyle } = useCardContext();

  const getColor = () => {
    if (suit === "♠" || suit === "♣") {
      return styles.black;
    } else {
      return styles.red;
    }
  };

  const getCardBackgroundStyle = () => {
    switch (cardStyle) {
      case CardStyle.BASE:
        switch (cardColor) {
          case CardColor.RED:
            return styles.baseStyleRed;
          case CardColor.BLUE:
            return styles.baseStyleBlue;
          case CardColor.GREEN:
            return styles.baseStyleGreen;
          case CardColor.UNIQUE:
            return styles.baseStyleUnique;
          default:
            return styles.baseStyleRed;
        }
      case CardStyle.GRADIENT:
        switch (cardColor) {
          case CardColor.RED:
            return styles.gradientStyleRed;
          case CardColor.BLUE:
            return styles.gradientStyleBlue;
          case CardColor.GREEN:
            return styles.gradientStyleGreen;
          case CardColor.UNIQUE:
            return styles.gradientStyleUnique;
          default:
            return styles.gradientStyleRed;
        }
      default:
        return styles.baseStyleRed;
    }
  };

  const getCard = () => {
    if (hidden) {
      return <div className={getCardBackgroundStyle()} />;
    } else {
      return (
        <div className={styles.card}>
          <div className={getColor()}>
            <h1 className={styles.value}>{value}</h1>
            <h1 className={styles.suit}>{suit}</h1>
          </div>
        </div>
      );
    }
  };

  return <>{getCard()}</>;
};

export default Card;
