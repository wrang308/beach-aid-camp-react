import { NavLink } from 'react-router-dom';
import { useHistory  } from 'react-router'
import { useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  const history = useHistory()

  return (
    <Navbar bg="dark" variant="dark" style={{top:"0px", position:"fixed", width:"100%", zIndex:"100"}}>
    <Container>
    <Navbar.Brand href="/">Beach aid camp</Navbar.Brand>
    <Nav className="/">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/training">training</Nav.Link>
      <Nav.Link href="/">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent