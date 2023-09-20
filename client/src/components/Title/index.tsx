import React from 'react'
import {useNavigate} from 'react-router-dom';

import '../../styles/title.css'

const Title = () => {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/introPage');
  }

  return (
    <div className='titleHolder'>
      <h1 className='animate__animated animate__pulse animate__infinite title'>Blackjack Pobability</h1>
      <button onClick={handleClick}>Start</button>
    </div>
      
  )
}

export default Title;
