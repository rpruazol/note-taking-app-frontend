import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Note from './Note'
import { Sortable } from '@shopify/draggable';


export default function Main() {
  const $draggable = useRef()
  console.log($draggable);
  const [note, setNote] = useState({})
  const [notes, setNotes] = useState([])
  const saveNote = (obj) => {
    setNote({ 'title': obj.title, 'description': obj.description })
  }

  useEffect(() => {
    const sort = new Sortable($draggable.current, {
      draggable: '.card'
    })
    const getNotes = async (obj) => {
      const URL = 'http://localhost:3001/';
      const response = await axios.get(URL)
      console.log(response.data)
      setNotes(response.data);
    }
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
      <Header />
      <div ref={$draggable} class="draggable-container">     
      {notes.length > 0 &&
        notes.map(obj => {
          return (
                <Note
                  data={obj}
                />
          )
        })
      }
      </div>
    </>
  )
}