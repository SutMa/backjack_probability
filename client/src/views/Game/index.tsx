import React, { useState, useEffect } from "react";
import Status from "../../components/Status";
import Hand from "../../components/Hand";
import jsonData from "../../data/deck.json";
import styles from "./Game.module.css";

const Game: React.FC = () => {
  enum GameState {
    bet,
    init,
    userTurn,
    dealerTurn,
  }

  enum Deal {
    user,
    dealer,
    hidden,
  }

  enum Message {
    bet = "Press Play to Start!",
    hitStand = "Hit or Stand?",
    bust = "Bust!",
    blackjack = "Blackjack!",
    userWin = "You Win!",
    dealerWin = "Dealer Wins!",
    tie = "Tie!",
  }

  enum Choice {
    noChoice = "",
    underElevenHit = "That was the correct choice! In this scenario, you cannot bust so it is better to hit!",
    underElevenStand = "That was the wrong choice. In this scenario, you cannot bust so it is better to hit!",
    rightChoice = "Filler",
    wrongChoice = "Filler2",
  }

  enum UserChoseTo {
    hit = "hit",
    stand = "stand",
    total = "total",
    ignore = "ignore",
  }

  enum DealerMessage {
    noMessage = "I have no advice.",
    hitMessage = "I suggest you hit.",
    standMessage = "I suggest you stand.",
  }

  const data = JSON.parse(JSON.stringify(jsonData.cards));
  const [deck, setDeck]: any[] = useState(data);

  const [userCards, setUserCards]: any[] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [userCount, setUserCount] = useState(0);

  const [displayTotal, setdisplayTotal] = useState(false);
  const [dealerHelp, setDealerHelp] = useState(false);

  const [dealerCards, setDealerCards]: any[] = useState([]);
  const [dealerScore, setDealerScore] = useState(0);
  const [dealerCount, setDealerCount] = useState(0);

  const [gameState, setGameState] = useState(GameState.bet);
  const [message, setMessage] = useState(Message.bet);
  const [choice, setChoice] = useState(Choice.noChoice);
  const [dealerMessage, setDealerMessage] = useState(DealerMessage.noMessage);
  const [buttonState, setButtonState] = useState({
    hitDisabled: false,
    standDisabled: false,
    resetDisabled: true,
  });

  useEffect(() => {
    if (gameState === GameState.init) {
      drawCard(Deal.user);
      drawCard(Deal.hidden);
      drawCard(Deal.user);
      drawCard(Deal.dealer);
      setGameState(GameState.userTurn);
      setMessage(Message.hitStand);
      setChoice(Choice.noChoice);
    }
  }, [gameState]);

  useEffect(() => {
    calculate(userCards, setUserScore);
    setUserCount(userCount + 1);
  }, [userCards]);

  useEffect(() => {
    calculate(dealerCards, setDealerScore);
    setDealerCount(dealerCount + 1);
  }, [dealerCards]);

  useEffect(() => {
    if (gameState === GameState.userTurn) {
      if (userScore === 21) {
        if (userCards.length === 2) {
          blackjack();
        } else {
          buttonState.hitDisabled = true;
          setButtonState({ ...buttonState });
        }
      } else if (userScore > 21) {
        bust();
      }
    }
  }, [userCount]);

  useEffect(() => {
    if (gameState === GameState.dealerTurn) {
      if (dealerScore >= 17) {
        checkWin();
      } else {
        drawCard(Deal.dealer);
      }
    }
  }, [dealerCount]);

  useEffect(() => {
    if (userScore <= 21) {
      determineChoice(UserChoseTo.ignore);
    } else {
      setDealerMessage(DealerMessage.noMessage);
    }
  }, [userScore]);

  const playGame = () => {
    setGameState(GameState.init);
  };

  const resetGame = () => {
    console.clear();
    setDeck(data);

    setUserCards([]);
    setUserScore(0);
    setUserCount(0);

    setDealerCards([]);
    setDealerScore(0);
    setDealerCount(0);

    setGameState(GameState.init);
    setMessage(Message.bet);
    setChoice(Choice.noChoice);
    setButtonState({
      hitDisabled: false,
      standDisabled: false,
      resetDisabled: true,
    });
  };

  const drawCard = (dealType: Deal) => {
    if (deck.length > 0) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      const card = deck[randomIndex];
      deck.splice(randomIndex, 1);
      setDeck([...deck]);
      console.log("Remaining Cards:", deck.length);
      switch (card.suit) {
        case "spades":
          dealCard(dealType, card.value, "♠");
          break;
        case "diamonds":
          dealCard(dealType, card.value, "♦");
          break;
        case "clubs":
          dealCard(dealType, card.value, "♣");
          break;
        case "hearts":
          dealCard(dealType, card.value, "♥");
          break;
        default:
          break;
      }
    } else {
      alert("All cards have been drawn");
    }
  };

  const toggleDisplayTotal = (val: boolean) => {
    setdisplayTotal(val);
  };

  const toggleDealerHelp = (val: boolean) => {
    setDealerHelp(val);
  };

  const dealCard = (dealType: Deal, value: string, suit: string) => {
    switch (dealType) {
      case Deal.user:
        userCards.push({ value: value, suit: suit, hidden: false });
        setUserCards([...userCards]);
        break;
      case Deal.dealer:
        dealerCards.push({ value: value, suit: suit, hidden: false });
        setDealerCards([...dealerCards]);
        break;
      case Deal.hidden:
        dealerCards.push({ value: value, suit: suit, hidden: true });
        setDealerCards([...dealerCards]);
        break;
      default:
        break;
    }
  };

  const revealCard = () => {
    dealerCards.filter((card: any) => {
      if (card.hidden === true) {
        card.hidden = false;
      }
      return card;
    });
    setDealerCards([...dealerCards]);
  };

  const calculate = (cards: any[], setScore: any) => {
    let total = 0;
    cards.forEach((card: any) => {
      if (card.hidden === false && card.value !== "A") {
        switch (card.value) {
          case "K":
            total += 10;
            break;
          case "Q":
            total += 10;
            break;
          case "J":
            total += 10;
            break;
          default:
            total += Number(card.value);
            break;
        }
      }
    });
    const aces = cards.filter((card: any) => {
      return card.value === "A";
    });
    aces.forEach((card: any) => {
      if (card.hidden === false) {
        if (total + 11 > 21) {
          total += 1;
        } else if (total + 11 === 21) {
          if (aces.length > 1) {
            total += 1;
          } else {
            total += 11;
          }
        } else {
          total += 11;
        }
      }
    });
    setScore(total);
  };

  const determineChoice = (userChoseTo: UserChoseTo) => {
    const setMessages = (hitMessage: Choice, standMessage: Choice, newMessage: DealerMessage) => {
      if (userChoseTo === UserChoseTo.hit) {
        setChoice(hitMessage);
      } else if (userChoseTo === UserChoseTo.stand) {
        setChoice(standMessage);
      } else if (userChoseTo == UserChoseTo.ignore) {
        setDealerMessage(newMessage);
      }
    };

    console.log("Users total:" + userScore);

    if (userScore <= 11) {
      // check if total is 11 or below; if so then hit
      setMessages(Choice.underElevenHit, Choice.underElevenStand, DealerMessage.hitMessage);
    } else if (
      userCards.length <= 2 &&
      userCards.filter((card: any) => {
        return card.value === "A";
      }).length >= 1
    ) {
      // if there is an ace, follow new ruleset
      // if ace and 6 or below, then hit; else if ace and 9 or above then stand
      const aces = userCards.filter((card: any) => {
        return card.value === "A";
      });
      const otherCards = userCards.filter((card: any) => {
        return card.value != "A";
      });

      if (aces.length >= 1) {
        let totalOfOtherCards = 0;
        otherCards.forEach((card: any) => {
          if (card.value == ("K" || "Q" || "J")) {
            totalOfOtherCards += 10;
          } else {
            totalOfOtherCards += parseInt(card.value);
          }
        });

        // checks if there are other aces to add to the total count
        if (aces.length >= 2) {
          // allows us to count the extra card in the aces stack
          totalOfOtherCards -= 1;
          aces.forEach(() => {
            totalOfOtherCards += 1;
          });
        }

        if (totalOfOtherCards <= 6) {
          setMessages(Choice.rightChoice, Choice.wrongChoice, DealerMessage.hitMessage);
        } else if (
          totalOfOtherCards >= 9 &&
          totalOfOtherCards <= 10 &&
          userChoseTo == UserChoseTo.hit
        ) {
          setMessages(Choice.rightChoice, Choice.wrongChoice, DealerMessage.standMessage);
        }
      }
    } else if (userScore >= 17) {
      // otherwise, if 17 or above then stand
      setMessages(Choice.rightChoice, Choice.wrongChoice, DealerMessage.standMessage);
    } else {
      // edge cases
      // user has an A/7 or A/8
      const aces = userCards.filter((card: any) => {
        return card.value === "A";
      });

      if (aces.length >= 1) {
        let sumOfUserCards = 0;
        userCards.forEach((card: any) => {
          if (card.value != "A") {
            if (card.value === ("K" || "Q" || "J")) {
              sumOfUserCards += 10;
            } else {
              sumOfUserCards += parseInt(card.value);
            }
          }
        });

        if (sumOfUserCards === 7) {
          if (dealerScore == 7 || dealerScore === 8) {
            setMessages(Choice.rightChoice, Choice.wrongChoice, DealerMessage.standMessage);
          } else {
            setMessages(Choice.rightChoice, Choice.wrongChoice, DealerMessage.hitMessage);
          }
        } else if (sumOfUserCards === 8) {
          if (
            dealerScore == 2 ||
            dealerScore === 3 ||
            dealerScore === 4 ||
            dealerScore === 5 ||
            dealerScore === 7 ||
            dealerScore === 8 ||
            dealerScore === 9 ||
            dealerScore === 10 ||
            dealerScore === 11
          ) {
            setMessages(Choice.rightChoice, Choice.wrongChoice, DealerMessage.standMessage);
          } else {
            setMessages(Choice.rightChoice, Choice.wrongChoice, DealerMessage.hitMessage);
          }
        }
      }

      // total is 12-16
      else if (userScore === 12) {
        // if dealer has 4, 5, or 6 then stand
        if (dealerScore === 4 || dealerScore === 5 || dealerScore === 6) {
          setMessages(Choice.rightChoice, Choice.wrongChoice, DealerMessage.standMessage);
        } else {
          setMessages(Choice.rightChoice, Choice.wrongChoice, DealerMessage.hitMessage);
        }
      } else if (
        userScore === 13 ||
        userScore === 14 ||
        userScore === 15 ||
        userScore === 16
      ) {
        // if dealer has 2-6 then stand
        if (
          dealerScore === 2 ||
          dealerScore === 3 ||
          dealerScore === 4 ||
          dealerScore === 5 ||
          dealerScore === 6
        ) {
          setMessages(Choice.rightChoice, Choice.wrongChoice, DealerMessage.standMessage);
        } else {
          setMessages(Choice.rightChoice, Choice.wrongChoice, DealerMessage.hitMessage);
        }
      }
    }
  };

  const hit = () => {
    determineChoice(UserChoseTo.hit);
    drawCard(Deal.user);
  };

  const stand = () => {
    determineChoice(UserChoseTo.stand);
    buttonState.hitDisabled = true;
    buttonState.standDisabled = true;
    buttonState.resetDisabled = false;
    setButtonState({ ...buttonState });
    setGameState(GameState.dealerTurn);
    revealCard();
  };

  const bust = () => {
    buttonState.hitDisabled = true;
    buttonState.standDisabled = true;
    buttonState.resetDisabled = false;
    setButtonState({ ...buttonState });
    setMessage(Message.bust);
  };

  const blackjack = () => {
    buttonState.hitDisabled = true;
    buttonState.standDisabled = true;
    buttonState.resetDisabled = false;
    setButtonState({ ...buttonState });
    setMessage(Message.blackjack);
  };

  const checkWin = () => {
    if (userScore > dealerScore || dealerScore > 21) {
      setMessage(Message.userWin);
    } else if (dealerScore > userScore) {
      setMessage(Message.dealerWin);
    } else {
      setMessage(Message.tie);
    }
  };

  const getScore = (cards: any, score: any) => {
    if (
      cards.filter((card: any) => {
        return card.value === "A";
      }).length >= 1 &&
      score != 21
    ) {
      let totalValue = 0;
      cards.map((card: any) => {
        if (card.value == "A") {
          totalValue += 11;
        } else if (card.value == ("K" || "Q" || "J")) {
          totalValue += 10;
        } else {
          totalValue += parseInt(card.value);
        }
      });
      if (totalValue <= 21) {
        return `${userScore}/${userScore - 10}`;
      }
    }
    return `${userScore}`;
  };

  return (
    <div className={styles.gameBackground}>
      <Status
        message={message}
        choice={choice}
        gameState={gameState}
        buttonState={buttonState}
        playGame={playGame}
        hit={hit}
        stand={stand}
        resetGame={resetGame}
        displayTotal={displayTotal}
        dealerHelp={dealerHelp}
        dealerMessage={dealerMessage}
        toggleDisplayTotal={toggleDisplayTotal}
        toggleDealerHelp={toggleDealerHelp}
      />
      <div className={styles.handSection}>
        <Hand
          title={`Dealer's Hand ${displayTotal ? `(${dealerScore})` : ""}`}
          cards={dealerCards}
        />
        <Hand
          title={`Your Hand ${
            displayTotal ? `(${getScore(userCards, userScore)})` : ""
          }`}
          cards={userCards}
        />
      </div>
    </div>
  );
};

export default Game;
