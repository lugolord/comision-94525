import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartWidget () {
  const navigate = useNavigate()
  const { getCartQuantity } = useContext(CartContext)
  const quantity = getCartQuantity()

  return (
    <button 
      type="button" 
      className="btn btn-dark position-relative"
      onClick={() => navigate('/cart')}
    >
      cart
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {quantity}
      </span>
    </button>
  )
}

export default CartWidget
