import { createContext } from "preact";
import { food_list } from "../assets/frontend_assets/assets";
import { useState } from "preact/hooks";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


  const [cartitem, setcartitem] = useState({});

  const addTocart = (itemId) => {
    if (!cartitem[itemId]) {
      setcartitem((prev) => ({ ...prev, [itemId]: 1 }))
    }
    else {
      setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }

  const Removefromcart = (itemId) => {
    setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalAmount += iteminfo.price * cartitem[item]
      }
    }
    return totalAmount;
  }


  const contextValue = {
    food_list,
    cartitem,
    setcartitem,
    addTocart,
    Removefromcart,
    getTotalCartAmount

  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}

    </StoreContext.Provider>
  )


}
export default StoreContextProvider