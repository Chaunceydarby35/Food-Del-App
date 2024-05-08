import { assets } from '../../assets/assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='footer-logo'src={assets.logo2} alt="" />
                <p>Feed Your Needs Here at Gobble!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="facebook icon" />
                    <img src={assets.twitter_icon} alt="twitter icon" />
                    <img src={assets.linkedin_icon} alt="linkedin icon" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GIVE US A SHOUT!</h2>
                <ul>
                    <li>+34-211-867-5309</li>
                    <li>contact@deeznutz.com</li>
                </ul>
            </div>
        </div>
        <hr /> 
        <p className='footer-copyright'>
            Copyright 2024 © Gobble.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer