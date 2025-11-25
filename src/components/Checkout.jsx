import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useCart } from '../context/useCart'
import { createOrder } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'

function Checkout () {
  const { getTotal, cart } = useCart()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const form = e.target
    const email = form.email.value
    const name = form.name.value
    const phone = form.phone.value

    const order = {
      buyer: { email, name, phone },
      total: getTotal(),
      items: cart,
      date: serverTimestamp()
    }

    createOrder(order)
  }

  return (
    <div className='d-flex justify-content-center'>
      <Form className='mt-5 border p-3 rounded w-50' onSubmit={handleSubmit}>
        <p className='fw-bold'>Para finalizar tu compra necesitamos los siguientes datos:</p>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Pepito Perez" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Numero de celular</Form.Label>
          <Form.Control type="text" placeholder="1123434565" required />
        </Form.Group>
        
        <Button variant="dark" type="submit" className='w-100'>
          Finalizar compra 🎉
        </Button>
      </Form>
    </div>
  )
}

export default Checkout
