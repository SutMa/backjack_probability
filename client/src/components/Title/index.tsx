import { useNavigate } from "react-router-dom";
import "./title.css";
import { GAME, CUSTOMIZE } from "../../data/routes";

const Title = () => {
  const navigate = useNavigate();

  const handlePlayGameClick = () => {
    navigate(GAME);
  };

  const handleCustomizeClick = () => {
    navigate(CUSTOMIZE);
  };

  return (
    <div className="background">
      <div className="titleHolder">
        <h1 className="title">Blackjack Probability</h1>
        <p className="info">
          Ever wanted to learn how to become a true professional at Blackjack?
          Well click 'Play' below to get started!
        </p>
        <div className="row">
          <button className="btn-hover" onClick={handlePlayGameClick}>
            Play the Game
          </button>
          <button className="btn-hover" onClick={handleCustomizeClick}>
            Customize Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
