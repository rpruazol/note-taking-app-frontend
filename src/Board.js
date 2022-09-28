import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NoteModal from './NoteModal';
import axios from 'axios';
import Note from './Note';

export default function Board(props) {
  console.log('props.data  ', props.data)
  const [modalOpen, showModal] = useState(false);
  const [notes, setNotes] = useState([])

  const getNotes = async (obj) => {
    const URL = `${process.env.REACT_APP_BACKEND}/notes?id=${obj.id}`;
    console.log('URL ', URL)
    const response = await axios.get(URL)
    console.log(response.data)
    setNotes(response.data);
  }

  useEffect(() => {
    getNotes(props.data)
  }, []);

  console.log('notes ', notes)
  return (
    <Card className="p-3 ms-4 mt-4" style={{width:'272px'}}>
      <Row className="row flex-row flex-nowrap">
      <div>
        <h3>{props.data.name}</h3>
          <p style={{display:'inline'}}>Add a Card</p>
          <Button onClick={showModal} variant="outline-dark" className="">+</Button>
      </div>
      </Row>
      <Row>
        {notes.length > 0 &&
          notes.map(obj => {
            return (
            <Note
              getNotes={getNotes}
              data={obj}
            />
            )
          })
        }
      </Row>
      <NoteModal
        boardObj={props.data}
        showModal={showModal}
        show={modalOpen}
        getNotes={getNotes}
      />
    </Card >
  );
}