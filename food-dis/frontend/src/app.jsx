
import './app.css'
import Navbar from './component/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Loginpopup from './component/Loginpopup/Loginpopup'
import { useState } from 'preact/hooks'
import Placeorder from './pages/PlaceOrder/Placeorder'


export function App() {
  const [showlogin, setshowlogin] = useState(false)

  return (
    <>
      {showlogin ? <Loginpopup setshowlogin={setshowlogin} /> : <></>}
      <div className='app'>
        <Navbar setshowlogin={setshowlogin} />

        <Routes>
          <Route exect path='/' element={<Home />} />
          <Route exect path='/cart' element={<Cart />} />
          <Route exect path='/order' element={<Placeorder />} />


        </Routes>


      </div>
    </>
  )
}
