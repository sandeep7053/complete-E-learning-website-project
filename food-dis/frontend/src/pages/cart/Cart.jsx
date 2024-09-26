import React from 'react'
import './Cart.css'
import { useContext } from 'preact/hooks'
import { StoreContext } from '../../Context/Storecontext'
import { food_list } from '../../assets/frontend_assets/assets'
import { useNavigate } from 'react-router-dom'



function Cart() {
  const { cartitem, Removefromcart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate()

  return (
    <>
      <div className='cart'>
        <div className="cart-item">
          <div className="cart-item-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {
            food_list.map((item, index) => {
              if (cartitem[item._id] > 0) {
                return (
                  <div>
                    <div className='cart-item-title cart-item-item'>
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartitem[item._id]}</p>
                      <p>${item.price * cartitem[item._id]}</p>
                      <p onClick={() => Removefromcart(item._id)} className='cross'>X</p>

                    </div>
                    <hr />
                  </div>


                )
              }

            })

          }

        </div>
        <div className="cart-bottom">
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
            <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code,Enter it here</p>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>


      </div>


    </>
  )
}

export default Cart
