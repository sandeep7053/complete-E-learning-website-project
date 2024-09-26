import React, { useState } from 'react'

import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import Cart from '../../pages/cart/Cart'
import { useContext } from 'preact/hooks'
import { StoreContext } from '../../Context/Storecontext'



function Navbar({ setshowlogin }) {
  const [menu, setmenu] = useState("home")

  const { getTotalCartAmount } = useContext(StoreContext);


  return (
    <div className='navbar'>
      <Link to={'/'}> <img src={assets.logo} alt="logo" className="logo" /></Link>
      <ul className='navbar-item'>
        <Link to='/' onClick={() => setmenu("home")} className={menu === "home" ? "active" : ""}>home</Link>

        <a href='#explore-menu' onClick={() => setmenu("menu")} className={menu === "menu" ? "active" : ""} >menu</a>
        <a href='#app-download' onClick={() => setmenu("mobile")} className={menu === "mobile" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setmenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="searchicon" />
        <div className="navbar-search-icon">
          <Link to={'/cart'}> <img src={assets.basket_icon} alt="on" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setshowlogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar

