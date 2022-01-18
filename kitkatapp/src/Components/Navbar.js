import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const NavBar = () => {

return (
<Navbar className="navbar-bg-custom" expand="lg">
  <Container>
    <Navbar.Brand href="/Home">Kit Kat Corner</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="me-auto">
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="/Forum">Forum</Nav.Link>
      </Nav>
      <Button className = "nav-button" type="submit" variant="outline-light">Login</Button>
      <Button className = "nav-button" type="submit" variant="outline-info">Register</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default NavBar;