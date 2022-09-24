import Form from 'react-bootstrap/Form';
import React from 'react';


export default function NoteForm(props) {


  return (
    <Form onSubmit={(e) => props.createNote(e)}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Note Title</Form.Label>
      <Form.Control
        type="text"
        autoFocus
      />
    </Form.Group>
    <Form.Group
      className="mb-3"
      controlId="exampleForm.ControlTextarea1"
    >
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
  </Form>
  );
}