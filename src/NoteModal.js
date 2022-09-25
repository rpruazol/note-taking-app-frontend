import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NoteForm from './NoteForm';
import Form from 'react-bootstrap/Form'
import axios from 'axios'

export default function Note(props) {

  return (
    <>
      <Modal show={props.show} onHide={() => props.showModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Note!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <NoteForm
      />
        </Modal.Body>
      </Modal>
    </>
  );
}
