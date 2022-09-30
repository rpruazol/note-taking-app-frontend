import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import axios from 'axios';
import Note from './Note'
import { Sortable } from '@shopify/draggable';
import Board from './Board';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BoardModal from './BoardModal'
import Button from 'react-bootstrap/Button';



export default function Main() {

  const [boards, setBoards] = useState([])
  const [modalOpen, showModal] = useState(false);


  const getBoards = async () => {
    const URL = process.env.REACT_APP_BACKEND;
    const response = await axios.get(URL)
    setBoards(response.data);

  }
  const $draggable = useRef()
  console.log($draggable);

  useEffect(() => {
    const sort = new Sortable($draggable.current, {
      draggable: '.container'
    })

    getBoards();

    sort.on('sort:start', () => { console.log(`sort start: ${sort}`) })
    sort.on('sort:move', () => { console.log('sort move') })
    sort.on('sort:stop', () => { console.log('sort stop: ') })


    return () => {
      sort.destroy();
    }
  }, []);


  console.log('boards: ', boards);
  return (
    <>
      <Header
        getBoards={getBoards}
      />
      <Row style={{'overflow-x':'auto', 'white-space': 'nowrap'}}>
        <div ref={$draggable}>
          {boards.length > 0 &&
            boards.map(obj => {
              return (

                  <Board
                    data={obj}
                    getBoards={getBoards}
                  />

              )
            })
          }
          <Button onClick={showModal} variant="secondary" size="lg" className="ms-3" style={{width: "272px"}}>
            Add a Board!
          </Button>
        </div>
        <BoardModal
        show={modalOpen}
        showModal={showModal}
        getBoards={getBoards}
      />
      </Row>
    </>
  )
}