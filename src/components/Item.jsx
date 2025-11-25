import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router'

function Item ({ item }) {
  const navigate = useNavigate()

  return (
    <Col lg={4}>
      <Card className='mb-4'>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button 
            variant="dark"
            onClick={() => navigate(`/item/${item.id}`)}
          >
            ver mas
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Item
