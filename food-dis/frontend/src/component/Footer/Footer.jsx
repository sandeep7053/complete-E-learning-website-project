import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'


function Footer() {
  return (
    <>
      <div className='footer' id='footer'>
        <div className='footer-content'>
          <div className='footer-content-left'>
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, eius. Velit commodi, distinctio ut laborum consectetur mollitia tempore unde! Facilis esse illo tempore dolorum, voluptatum </p>
            <div className='footer-socila-icon'>
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
            </div>


          </div>
          <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>

          </div>

          <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+1-4657-700-7311</li>
              <li>sandeepyadav@21495@gmail.com</li>
            </ul>

          </div>


        </div>
        <hr />

      </div>

    </>
  )
}

export default Footer
