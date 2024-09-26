import React from 'react'
import './Fooditem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { useContext, useState } from 'preact/hooks'
import { StoreContext } from '../../Context/Storecontext'

function Fooditem({ id, name, price, description, image }) {


  const [countitem, setcountitem] = useState(0)
  const { cartitem, addTocart, Removefromcart } = useContext(StoreContext)


  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt="" />
        {
          !cartitem
            ? <img className='add' onClick={() => addTocart(id)} src={assets.add_icon_white} alt="" />
            : <div className='food-item-counter'>
              <img onClick={() => Removefromcart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartitem[id]}</p>
              <img onClick={() => addTocart(id)} src={assets.add_icon_green} alt="" />

            </div>

        }
      </div>
      <div className='food-item-info'>
        <div className="food-item-name-rating">
          <p>{name} </p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">
          {description}
        </p>
        <p className="food-item-price">
          ${price}
        </p>
      </div>

    </div>
  )
}

export default Fooditem
