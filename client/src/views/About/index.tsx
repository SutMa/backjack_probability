import AboutUs1 from "../../assets/images/AboutUs1.png";
import AboutUs2 from "../../assets/images/AboutUs2.png";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="column">
        <div className="about-row">
          <div className="column">
            <div className="text-holder">
              <h1 className="about-header">Who are we?</h1>
              <p className="about-p">
                We are a group of college students currently completing a course
                called Interface Design. We are a small group of four hoping to
                create an easy to use application for those wanting to delve
                deeper into the game of Blackjack.
              </p>
            </div>
          </div>
          <img src={AboutUs1} />
        </div>
        <div className="about-row">
          <img src={AboutUs2} />
          <div className="column">
            <div className="text-holder">
              <h1 className="about-header">
                What is the purpose of this website?
              </h1>
              <p className="about-p">
                We believe there aren't many applications on the web suited for
                learning blackjack. Most of the methods used today are games that
                are more focused on gameplay than teaching. We want to create a
                user-friendly website that allows people to learn how to play
                without risking their hard-earned money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
