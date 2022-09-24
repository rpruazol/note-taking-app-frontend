import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NoteForm from './NoteForm';
import Form from 'react-bootstrap/Form'

export default function Note(props) {

  const createNote = (e) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value);
  }
  return (
    <>
      <Modal show={props.show} onHide={() => props.showModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Note!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => createNote(e)}>
            <Form.Group className="mb-3" controlId="note">
              <Form.Label>Note Title</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
              <Modal.Footer>
            
              <Button variant="secondary" onClick={() => props.showModal(false)}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Add Note
              </Button>
              </Modal.Footer>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
