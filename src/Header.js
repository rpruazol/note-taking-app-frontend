import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{"borderBottom":"1px solid grey"}}>
        <Container className="ms-3">
          <Navbar.Brand href="#home">Trello (sorta)</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
            {/* <Nav md={{ span: 4, offset: 4 }}>
              <Nav.Link onClick={() => showModal(true)}>New Board</Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <BoardModal
        show={modalOpen}
        showModal={showModal}
        getBoards={props.getBoards}
      /> */}
    </>
  );
}

export default Header;