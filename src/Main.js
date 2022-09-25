import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import axios from 'axios';
import Note from './Note'
import { Sortable } from '@shopify/draggable';


export default function Main() {

  const getNotes = async (obj) => {
    const URL = REACT_APP_BACKEND;
    const response = await axios.get(URL)
    console.log(response.data)
    setNotes(response.data);
  }
  const $draggable = useRef()
  console.log($draggable);
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const sort = new Sortable($draggable.current, {
      draggable: '.card'
    })

    getNotes();
    console.log(notes);

    sort.on('sort:start', ()=> {console.log('sort start')})
    sort.on('sort:move', ()=> {console.log('sort move')})
    sort.on('sort:stop', ()=> {console.log('sort stop')}) 


    return () => {
      sort.destroy();
    }
  }, []);


  return (
    <>
      <Header 
      getNotes={getNotes}
      />
      <div ref={$draggable} class="draggable-container">     
      {notes.length > 0 &&
        notes.map(obj => {
          return (
                <Note
                  data={obj}
                  getNotes={getNotes}
                />
          )
        })
      }
      </div>
    </>
  )
}