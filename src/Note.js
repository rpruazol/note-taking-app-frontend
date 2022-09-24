import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState, useRef } from 'react';



export default function Note(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          {props.data.description}
        </Card.Text>
        <Button variant="primary">Edit</Button>
        <Button variant="primary">Delete</Button>

      </Card.Body>
    </Card>
  )
}