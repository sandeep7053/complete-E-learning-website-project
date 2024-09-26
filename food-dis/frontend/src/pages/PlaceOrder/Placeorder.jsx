import React from 'react'
import './Placeorder.css'
import { useContext } from 'preact/hooks'
import { StoreContext } from '../../Context/Storecontext'
import Footer from '../../component/Footer/Footer'

function Placeorder() {

  const { getTotalCartAmount } = useContext(StoreContext)


  return (
    <>
      <div>
        <form className='place-order'>
          <div className="place-order-left">
            <p className="title">
              Delivery Information
            </p>
            <div className="multi-fild">
              <input type="text" placeholder='First Name ' />
              <input type="text" placeholder=' Last Name' />
            </div>
            <input type="email" placeholder='Email Address' />
            <input type="text" placeholder='Street' />
            <div className="multi-fild">
              <input type="text" placeholder='City' />
              <input type="text" placeholder=' State' />
            </div>
            <div className="multi-fild">
              <input type="text" placeholder='Zip Code' />
              <input type="text" placeholder=' Country' />
            </div>
            <input type="text" placeholder='Phone' />

          </div>
          <div className="place-order-right">
            <div className="cart-total">
              <h2>Cart Total</h2>
              <div>
                <div className="cart-total-detail">
                  <p>SubTotal</p>

                  <p>${getTotalCartAmount()}</p>

                </div>
                <hr />
                <div className="cart-total-detail">
                  <p>Delivery Free</p>
                  <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>

                </div>
                <hr />
                <div className="cart-total-detail">
                  <p>Total</p>
                  <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>

                </div>

              </div>
              <button >PROCEED TO PAYMENT</button>
            </div>


          </div>

        </form>
      </div>
      <Footer />



    </>
  )
}

export default Placeorder
