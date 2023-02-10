import { useState } from 'react'
import arrowDown from '../assets/img/arrowDown.svg'
import tuPrutec from '../assets/img/tuPrutec.svg'

export const Nav = ({ title, username }) => {
  const [arrowActive, setArrowActive] = useState(false)

  const changeArrow = () => {
    setArrowActive(!arrowActive)
  }

  return (
    <div className='container' data-testid='Header'>
      <div className='logo'>
        <img src={tuPrutec} className='App-logo' alt={title} />
      </div>
      <div className='username'>
        <span>{username}</span>
        <img
          src={arrowDown}
          onClick={() => changeArrow()}
          className={arrowActive ? 'arrowActive' : 'arrow'}
          alt='usernameIcon'
        />
      </div>
    </div>
  )
}
