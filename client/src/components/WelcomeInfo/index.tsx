import './WelcomeInfo.css';
import CardsAndChips from '../../assets/images/CardsAndChips.svg';
import PuzzleWall from '../../assets/images/PuzzleWall.svg';
import PiggyBank from '../../assets/images/PiggyBank.svg';
import CardDecks from '../../assets/images/CardDecks.svg';

const WelcomeInfo = () => {
    return (
        <div className='container'>
            <div className='subContainer'>
                <p className='titleText'>Learn How to Play!</p>
                <img className='image' src={CardsAndChips} />
            </div>
            <div className='subContainer'>
                <img className='image' src={CardDecks} />
                <p className='titleText'>Learn Basic Strategy!</p>
            </div>
            <div className='subContainer'>
                <p className='titleText'>See The Odds and Learn to Beat Them!</p>
                <img className='image' src={PuzzleWall} />
            </div>
            <div className='subContainer'>
                <img className='image' src={PiggyBank} />
                <p className='titleText'>Customize Your Playing Area!</p>
            </div>
        </div>
    )
}

export default WelcomeInfo