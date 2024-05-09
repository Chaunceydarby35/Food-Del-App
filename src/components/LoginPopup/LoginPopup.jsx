/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sign Up")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2> 
                <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="cross-icon" />
            </div>
            
        </form>
    </div>
  )
}

export default LoginPopup