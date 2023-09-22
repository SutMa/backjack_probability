import './WelcomeInfo.css';
import image from '../../assets/images/poker-cards.png';

const WelcomeInfo = () => {
    return (
        <div className='container'>
            <div className='subContainer'>
                <p className='titleText'>Learn How to Play!</p>
                <img className='image' src={image} />
            </div>
            <div className='subContainer'>
                <img className='image' src={image} />
                <p className='titleText'>Learn Basic Strategy!</p>
            </div>
            <div className='subContainer'>
                <p className='titleText'>See The Odds and Learn to Beat Them!</p>
                <img className='image' src={image} />
            </div>
            <div className='subContainer'>
                <img className='image' src={image} />
                <p className='titleText'>Customize Your Playing Area!</p>
            </div>
        </div>
    )
}

export default WelcomeInfo