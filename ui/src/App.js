import React from 'react';
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';
import TodayDetail from './component/chart/TodayDetail';

function App() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Wetdata
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">History</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/andraantariksa/cit208-wetdata">GitHub</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Container>
        <TodayDetail />
      </Container>
    </>
  );
}

export default App;
