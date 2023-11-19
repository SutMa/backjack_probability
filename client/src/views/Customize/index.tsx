import Card from "../../components/Card";
import { useCardContext, CardColor, CardStyle } from "../../modules/cardData";
import "./Customize.css";

const Customize = () => {
  const { cardColor, setCardColor, cardStyle, setCardStyle } = useCardContext();

  const getStyle = (color: CardColor, style: CardStyle) => {
    if (
      cardColor.valueOf() === color.valueOf() &&
      cardStyle.valueOf() === style.valueOf()
    ) {
      return "buttonSelected";
    } else {
      return "button";
    }
  };

  const selectStyle = (color: CardColor, style: CardStyle) => {
    setCardColor(color);
    setCardStyle(style);
  };

  return (
    <div className="pageContainer">
      <Card value="A" suit="spade" hidden={true} />
      <div className="buttonsContainer">
        <div className="buttonGroup">
          <h1 className="buttonLabel">Base</h1>
          <button
            className={getStyle(CardColor.RED, CardStyle.BASE)}
            onClick={() => selectStyle(CardColor.RED, CardStyle.BASE)}
          >
            Red
          </button>
          <button className={getStyle(CardColor.BLUE, CardStyle.BASE)}
            onClick={() => selectStyle(CardColor.BLUE, CardStyle.BASE)}>
            Blue
          </button>
          <button className={getStyle(CardColor.GREEN, CardStyle.BASE)}
            onClick={() => selectStyle(CardColor.GREEN, CardStyle.BASE)}>
            Green
          </button>
          <button className={getStyle(CardColor.UNIQUE, CardStyle.BASE)}
            onClick={() => selectStyle(CardColor.UNIQUE, CardStyle.BASE)}>
            Unique
          </button>
        </div>
        <div className="buttonGroup">
          <h1 className="buttonLabel">Gradient</h1>
          <button className={getStyle(CardColor.RED, CardStyle.GRADIENT)}
            onClick={() => selectStyle(CardColor.RED, CardStyle.GRADIENT)}>
            Red
          </button>
          <button className={getStyle(CardColor.BLUE, CardStyle.GRADIENT)}
            onClick={() => selectStyle(CardColor.BLUE, CardStyle.GRADIENT)}>
            Blue
          </button>
          <button className={getStyle(CardColor.GREEN, CardStyle.GRADIENT)}
            onClick={() => selectStyle(CardColor.GREEN, CardStyle.GRADIENT)}>
            Green
          </button>
          <button className={getStyle(CardColor.UNIQUE, CardStyle.GRADIENT)}
            onClick={() => selectStyle(CardColor.UNIQUE, CardStyle.GRADIENT)}>
            Unique
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customize;
