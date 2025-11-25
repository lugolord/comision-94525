import { useCart } from '../context/useCart'
import { useNavigate } from 'react-router'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import EmptyCart from './EmptyCart'

function CartContainer () {
  const { cart, clearCart } = useCart()
  const navigate = useNavigate()

  if (cart.length < 1) {
    return (
      <EmptyCart />
    )
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <ListGroup className='w-75'>
        {cart.map(prod => (
          <ListGroup.Item key={prod.id} className='d-flex justify-content-between align-items-center gap-4'>
            <Image src={prod.image} width={100} />
            {prod.name} x {prod.count}
            <Button variant='danger'>eliminar</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button 
        className='mt-5 w-75' 
        variant='danger'
        onClick={() => clearCart()}
      >
        vaciar carrito
      </Button>
      <Button 
        className='mt-3 w-75' 
        variant='success'
        onClick={() => navigate('/checkout')}
      >
        Ir al checkout
      </Button>
    </div>
  )
}

export default CartContainer
