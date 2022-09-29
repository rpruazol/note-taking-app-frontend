import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export default function NoteForm(props) {
  const [noteTitle, setTitle] = useState('');
  const [noteDescription, setDescription] = useState('');

  console.log('NoteForm props: ', props.boardObj)
  const createNote = async (e) => {
    e.preventDefault()
    if(window.confirm('are you sure?')) {
      console.log('noteTitle ', noteTitle);
      console.log('noteDescription ', noteDescription);
      const config = {
        url: '/note',
        method: 'post',
        baseURL: process.env.REACT_APP_BACKEND,
        data: {
          title: noteTitle,
          description: noteDescription,
          board_id: props.boardObj.id,
          board: props.boardObj.name
        }
      }
      const response = await axios(config);
      props.showModal(false);
      props.getNotes(props.boardObj.id);
    } else {
      return
    }
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

      <Button variant="secondary" onClick={() => props.showModal(false)}>
        Close
      </Button>
      <Button variant="primary" type="submit">
        Add Note
      </Button>
    </Form>
  );
}