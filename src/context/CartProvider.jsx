import { CartContext } from './CartContext'
import { useState } from 'react'

function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const getCartQuantity = () => cart.reduce((acc, current) => acc + current.count, 0)

  const addToCart = product => setCart([...cart, product])

  const clearCart = () => setCart([])

  const getTotal = () => cart.reduce((acc, current) => acc + (current.count*current.price), 0)
  
  const value = {
    getCartQuantity, 
    addToCart, 
    cart, 
    clearCart,
    getTotal
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

