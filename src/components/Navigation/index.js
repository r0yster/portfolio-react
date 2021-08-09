import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation(props) {
  const { navItems = [], currentNav, setCurrentNav } = props;

  return (
    <Navbar className="color-nav" variant="dark">
      <Container>
        <Navbar.Brand href="/">Roy Cantu</Navbar.Brand>
        <Nav>
          {navItems.map((nav) => (
            <Nav.Item key={nav} className={currentNav === nav && "navActive"}>
              <Nav.Link onClick={() => setCurrentNav(nav)}>{nav}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;