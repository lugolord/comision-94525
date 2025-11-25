import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { Link } from 'react-router'

function NavBar ({ categories }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to='/'>Te lo tengo 🏪</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="categorias">
              <div className='d-flex flex-wrap' style={{ width: 500 }}>
                {categories.map(cat => (
                  <NavDropdown.Item as={Link} to={`/category/${cat}`} key={cat} style={{ width: '50%' }}>
                    {cat}
                  </NavDropdown.Item>
                ))}
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar
