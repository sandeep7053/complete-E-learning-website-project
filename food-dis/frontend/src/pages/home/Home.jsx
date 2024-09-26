import React from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import Exploremenu from '../../component/Exploremenu/Exploremenu'
import { useState } from 'preact/hooks'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import Footer from '../../component/Footer/Footer'
import Appdownload from '../../component/Appdownload/Appdownload'


function Home() {
  const [category, setcategory] = useState("All");

  return (
    <div>
      <Header />
      <Exploremenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category} />
      <Appdownload />
      <Footer />

    </div>
  )
}

export default Home
