import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function NoteForm(props) {
  const [noteTitle, setTitle] = useState('');
  const [noteDescription, setDescription] = useState('');


  const createNote = async (e) => {
    e.preventDefault()
    console.log('noteTitle ', noteTitle);
    console.log('noteDescription ', noteDescription);
    const config = {
      url: '/newnote',
      method: 'post',
      baseURL: process.env.REACT_APP_BACKEND,
      data: {
        title: noteTitle,
        description: noteDescription
      }

    }
    const response = await axios(config);

    console.log(response)
  }



  return (
    <Form onSubmit={(e) => createNote(e)}>
    <Form.Group className="mb-3" controlId="note-title">
      <Form.Label>Note Title</Form.Label>
      <Form.Control
        type="text"
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="note-description">

    <Form.Label>Description</Form.Label>
    <Form.Control 
      as="textarea" 
      rows={3}
      onChange={(e) => setDescription(e.target.value)} />
    </Form.Group>

    <Modal.Footer>

      <Button variant="secondary" onClick={() => props.showModal(false)}>
        Close
      </Button>
      <Button variant="primary" type="submit">
        Add Note
      </Button>
    </Modal.Footer>
  </Form>
  );
}