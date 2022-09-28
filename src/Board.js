import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Board(props) {
  return (
    <Container>
      <Row>
        <Col>+ Add a Card</Col>
      </Row>
    </Container>
  );
}