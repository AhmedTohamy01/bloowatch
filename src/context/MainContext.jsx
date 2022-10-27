import { createContext, useState } from 'react'

export const MainContext = createContext({})

export const MainContextProvider = ({ children }) => {
  const [activeProduct, setActiveProduct] = useState({})
  const [cartItems, setCartItems] = useState([])

  return (
    <MainContext.Provider
      value={{
        activeProduct,
        setActiveProduct,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
