import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import axios from 'axios';



export default function Note(props) {
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
      props.getNotes(props.data.board_id)
    }
  }
  return (
    <Card className="mt-3 mb-3" key={props.id}>
      <Card.Body key={props.id}>
        <Card.Title key={props.id}>{props.data.title}</Card.Title>
        <Card.Text>
          {props.data.description}
        </Card.Text>
        <Button variant="primary">Edit</Button>

        <Button variant="primary" onClick={() => deleteNote(props.data.id)}>Delete</Button>

      </Card.Body>
    </Card>
  )
}