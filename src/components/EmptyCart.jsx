import Button from 'react-bootstrap/Button'
import { Link } from 'react-router'

function EmptyCart () {
  return (
    <div className='d-flex flex-column align-items-center mt-5'>
      <h2>No tienes productos en el carrito 😔</h2>
      <Button as={Link} to='/' className='w-50'>
        ir a ver productos
      </Button>
    </div>
  )
}

export default EmptyCart
