import { useNavigate } from "react-router-dom";
import "./title.css";

const Title = () => {
  const navigate = useNavigate();

  const handleCalculateClick = () => {
    navigate("/learn");
  };

  const handlePlayGameClick = () => {
    navigate("/game");
  }

  const handleCustomizeClick = () => {
    navigate("/customize");
  }

  return (
    <div className="background">
      <div className="titleHolder">
        <h1 className="title">Blackjack Probability</h1>
        <p className="info">
          Ever wanted to learn how to become a true professional at Blackjack?
          Well click 'Learn the Game' below to learn how you can!
        </p>
        <div className='column'>
          <div className='row'>
            <button className="btn-hover" onClick={handleCalculateClick}>
              Learn the Game
            </button>
            <button className="btn-hover" onClick={handlePlayGameClick}>
              Play the Game
            </button>
          </div>
          <button className="btn-hover" onClick={handleCustomizeClick}>
            Customize Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
