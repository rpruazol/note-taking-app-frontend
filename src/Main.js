import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import axios from 'axios';
import { Sortable } from '@shopify/draggable';
import Board from './Board';
import Row from 'react-bootstrap/Row';
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

  useEffect(() => {
    const sort = new Sortable($draggable.current, {
      draggable: '.container'
    })

    getBoards();

    sort.on('sortable:start', () => console.log('sortable:start: ', sort));
    sort.on('sortable:sort', () => console.log('sortable:sort'));
    sort.on('sortable:sorted', () => console.log('sortable:sorted'));
    sort.on('sortable:stop', (e) => console.log('sortable:stop: ', Array.from(sort.getDraggableElementsForContainer(e.newContainer)).map(object => object.textContent), 'boards:  ', boards ));


    return () => {
      sort.destroy();
    }
  }, []);



  return (
    <>
      <Header
        getBoards={getBoards}
      />
      <Row style={{ 'overflowX': 'auto', 'whiteSpace': 'nowrap' }}>
        <div ref={$draggable}>
          {boards.length > 0 &&
            boards.map(obj => {
              return (

                <Board
                  key={obj.id}
                  data={obj}
                  getBoards={getBoards}
                />

              )
            })
          }
          <Button onClick={showModal} variant="secondary" size="lg" className="ms-3" style={{ width: "272px" }}>
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