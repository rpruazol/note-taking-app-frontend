import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';



export default function Note(props) {
  const [noteId, setNoteId] = useState('');
  const deleteNote = async (id) => {
    console.log('id', id);
    if(window.confirm('are you sure')){
      const config = {
        url: '/note',
        method: 'delete',
        baseURL: process.env.REACT_APP_BACKEND,
        data: {
          id: id,
        }
      }
      const response = await axios(config);
      console.log(response)
      console.log('props: ', props)
      props.getNotes(props.data)
    }
  }
  console.log('Note props: ', props)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          {props.data.description}
        </Card.Text>
        <Button variant="primary">Edit</Button>

        <Button variant="primary" onClick={() => deleteNote(props.data.id)}>Delete</Button>

      </Card.Body>
    </Card>
  )
}