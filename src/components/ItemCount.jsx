import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Button from 'react-bootstrap/Button'

function ItemCount ({ item }) {
  const [counter, setCounter] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleRes = () => {
    if (counter === 0) return
    setCounter(counter - 1)
  }

  const handleAddToCart = () => addToCart({...item, count: counter})

  return (
    <div>
      <p>{counter}</p>
      <div className='d-flex gap-1'>
        <Button onClick={handleRes} disabled={counter === 1} variant='danger'>restar</Button>
        <Button onClick={handleAdd} variant='success'>sumar</Button>
        <Button 
          disabled={counter === 0}
          onClick={handleAddToCart}
        >
          add to cart
        </Button>
      </div>
    </div>
  )
}

export default ItemCount
