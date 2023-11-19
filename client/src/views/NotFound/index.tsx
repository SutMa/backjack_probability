import './NotFound.css';
import Error from '../../assets/images/404Error.png';

const NotFound = () => {
    return (
        <div className="errorContainer">
            <img src={Error} className='error-img'/>
        </div>
    )
}

export default NotFound;