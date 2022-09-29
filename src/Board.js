import React, { useEffect, useState } from 'react';
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

  const getNotes = async (id) => {
    const URL = `${process.env.REACT_APP_BACKEND}/notes?id=${id}`;
    console.log('URL ', URL)
    const response = await axios.get(URL)
    console.log(response.data)
    setNotes(response.data);
  }

  const deleteBoard = async (obj) => {
    if(window.confirm('Delete this board?  This will also delete all the notes associated with it.')) {
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
    getNotes(props.data.id)
  }, []);

  return (
    <Card className="p-3 ms-4 mt-4" style={{ width: '272px' }}>
      <Row className="row flex-row flex-nowrap">
        <div>
          <div class="board-header">
            <h3>{props.data.name}</h3>
            <Button onClick={() => {deleteBoard(props.data)}} variant="dark" className="">x</Button>
          </div>
        </div>

      </Row>
      <Col>
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
      </Col>
      <Button onClick={showModal} variant="outline-dark" className="">+ Add a Card</Button>
      <NoteModal
        boardObj={props.data}
        showModal={showModal}
        show={modalOpen}
        getNotes={getNotes}
      />
    </Card >
  );
}