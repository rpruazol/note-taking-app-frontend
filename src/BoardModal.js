import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BoardForm from './BoardForm'

export default function BoardModal(props) {

  return (
    <>
      <Modal show={props.show} onHide={() => props.showModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Board!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BoardForm
            showModal={props.showModal}
            // getBoards={getBoards}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
