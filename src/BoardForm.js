import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export default function BoardForm(props) {
  const [boardTitle, setTitle] = useState('');

  const createBoard = async (e) => {
    e.preventDefault()
    if (window.confirm('are you sure?')) {
      console.log('noteTitle ', boardTitle);
      const config = {
        url: '/board',
        method: 'post',
        baseURL: process.env.REACT_APP_BACKEND,
        data: {
          title: boardTitle,
        }
      }
      const response = await axios(config);
      props.showModal(false);
      props.getBoards();
    } else {
      return
    }
  }



  return (
    <Form onSubmit={(e) => createBoard(e)}>
      <Form.Group className="mb-3" controlId="board">
        <Form.Label>Board Name</Form.Label>
        <Form.Control onChange={(e) => setTitle(e.target.value)}type="text" placeholder="My board" />
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