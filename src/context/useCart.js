import { CartContext } from './CartContext'
import { useContext } from 'react'

export const useCart = () => useContext(CartContext)
