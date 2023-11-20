import "./WelcomeInfo.css";
import HomePage1 from "../../assets/images/HomePage1.png";
import HomePage2 from "../../assets/images/HomePage2.png";
import HomePage3 from "../../assets/images/HomePage3.png";
import HomePage4 from "../../assets/images/HomePage4.png";
import Slide from "react-reveal/Slide";

const WelcomeInfo = () => {
  return (
    <div className="container">
      <div className="subContainer">
        <Slide left>
          <p className="titleText">
            Play Blackjack in a risk free environment!
          </p>
        </Slide>
        <Slide right>
          <img className="image" src={HomePage1} />
        </Slide>
      </div>
      <div className="subContainer">
        <Slide left>
          <img className="image" src={HomePage2} />
        </Slide>
        <Slide right>
          <p className="titleText">Learn basic strategy with our Dealer AI!</p>
        </Slide>
      </div>
      <div className="subContainer">
        <Slide left>
          <p className="titleText">
            Map out strategies with the charts and learn basic Blackjack terms!
          </p>
        </Slide>
        <Slide right>
          <img className="image" src={HomePage3} />
        </Slide>
      </div>
      <div className="subContainer">
        <Slide left>
          <img className="image" src={HomePage4} />
        </Slide>
        <Slide right>
          <p className="titleText">
            Customize your playing area to your own liking!
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default WelcomeInfo;
