import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NoteModal from './NoteModal';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

import Note from './Note';

export default function Board(props) {
  console.log('props.data  ', props.data)
  const [modalOpen, showModal] = useState(false);
  const [notes, setNotes] = useState([])

  const getNotes = async (id) => {
    const URL = `${process.env.REACT_APP_BACKEND}/notes?id=${id}`;
    console.log('URL ', URL)
    const response = await axios.get(URL)
    console.log(response.data)
    setNotes(response.data);
  }

  const deleteBoard = async (obj) => {
    if (window.confirm('Delete this board?  This will also delete all the notes associated with it.')) {
      console.log('deleted info: ', obj);
      const URL = process.env.REACT_APP_BACKEND
      const config = {
        url: '/board',
        method: 'delete',
        baseURL: process.env.REACT_APP_BACKEND,
        data: {
          board: obj
        }
      }
      const response = await axios(config);
      console.log(response);
      props.getBoards();
      getNotes(props.data.id);
    }

  }

  useEffect(() => {
    if (props.data.id)
      getNotes(props.data.id)
  }, [props.data.id]);

  return (
    <Container className="p-3 ms-4 mt-4" style={{ width: '272px' }}>

          <div>
            <div class="board-header" style={{ 'word-break': 'break-all' }}>
              <h3>{props.data.name}</h3>
              <Button style={{ height: '50px' }} onClick={() => { deleteBoard(props.data) }} variant="dark" className="">x</Button>
            </div>
          </div>


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

      <Button onClick={showModal} variant="outline-dark" className="">+ Add a Card</Button>
      <NoteModal
        boardObj={props.data}
        showModal={showModal}
        show={modalOpen}
        getNotes={getNotes}
      />
    </Container >
  );
}