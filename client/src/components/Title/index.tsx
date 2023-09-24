import { useNavigate } from "react-router-dom";
import "./title.css";
import { PiPokerChipDuotone } from "react-icons/pi";

const Title = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/introPage");
  };

  return (
    <div className="background">
      <div className="row">
        <PiPokerChipDuotone size="50px" className="pokerChipIcon" />
        <p className="pokerChipCurrency">100</p>
      </div>
      <div className="titleHolder">
        <h1 className="title">Blackjack Probability</h1>
        <p className="info">
          Ever wanted to learn how to become a true professional at Blackjack?
          Well click 'Get Started' below to learn how you can!
        </p>
        <button className="btn-hover" onClick={handleClick}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Title;
