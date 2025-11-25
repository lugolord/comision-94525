import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ItemCount from './ItemCount'

function ItemDetail ({ item }) {
  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <Image src={item?.image} alt={item?.name} />
        </Col>
        <Col>
          <h2>{item?.name}</h2>
          <p>${item?.price}</p>
          <p>{item?.description}</p>
          <ItemCount item={item} />
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail
