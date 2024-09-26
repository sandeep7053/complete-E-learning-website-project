import React from 'react'
import './Loginpopup.css'
import { useState } from 'preact/hooks'
import { assets } from '../../assets/frontend_assets/assets'

function Loginpopup({ setshowlogin }) {
  const [currstate, setcurrstate] = useState("login")


  return (
    <>
      <div className='login-popup'>
        <form className='login-popup-container'>
          <div className='login-popup-title'>
            <h2>{currstate}</h2>
            <img onClick={() => setshowlogin(false)} className='' src={assets.cross_icon} alt="" />

          </div>
          <div className='login-popup-input'>
            {currstate === "login" ? <></> : <input type="text" placeholder='Your name' required />}

            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Your password' required />

          </div>
          <button> {currstate === "sign up" ? "create account" : "login"} </button>

          <div className='login-popup-condition'>
            <input type="checkbox" required />
            <p>By continuing , i agree to the tearm of use & privacy policy</p>
          </div>
          {
            currstate === 'login'
              ? <p>Create a new account? <span onClick={() => setcurrstate("sign up")}>Click here</span></p>
              : <p>Already have a account? <span onClick={() => setcurrstate("login")}> Login here</span></p>
          }




        </form>

      </div>



    </>
  )
}

export default Loginpopup
