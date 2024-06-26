/* eslint-disable react/prop-types */

import './NavBar.css'
import {assets } from '../../assets/assets/assets'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("Menu")



  return (
    <div className='navbar'> 
        <Link to='/'><img src={assets.logo2} alt="logo" className='navbar-logo'/></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
            <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className="dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar