import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NoteModal from './NoteModal'

function Header(props) {
  // const [modalOpen, showModal] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{"border-bottom":"1px solid grey"}}>
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