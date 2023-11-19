import './WelcomeInfo.css';
import HomePage1 from '../../assets/images/HomePage1.png';
import HomePage2 from '../../assets/images/HomePage2.png';
import HomePage3 from '../../assets/images/HomePage3.png';
import HomePage4 from '../../assets/images/HomePage4.png';

const WelcomeInfo = () => {
    return (
        <div className='container'>
            <div className='subContainer'>
                <p className='titleText'>Play Blackjack in a risk free environment!</p>
                <img className='image' src={HomePage1} />
            </div>
            <div className='subContainer'>
                <img className='image' src={HomePage2} />
                <p className='titleText'>Learn basic strategy with our Dealer AI!</p>
            </div>
            <div className='subContainer'>
                <p className='titleText'>Map out strategies with the charts and learn basic Blackjack terms!</p>
                <img className='image' src={HomePage3} />
            </div>
            <div className='subContainer'>
                <img className='image' src={HomePage4} />
                <p className='titleText'>Customize your playing area to your own liking!</p>
            </div>
        </div>
    )
}

export default WelcomeInfo