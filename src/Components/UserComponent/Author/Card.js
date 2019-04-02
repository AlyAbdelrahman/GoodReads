import React from 'react'
// import './category.css'
import { Button, Card, Col, Row, Container } from 'react-bootstrap'
import {BrowserRouter as Link } from 'react-router-dom';


const AuthorCard = (props) => {
  return (

    <>
      <Col sm={6} md={3} className="mb-3 ">
        <Card>
          <Card.Img variant="top" src="https://elgarblog.files.wordpress.com/2014/01/education-books.jpg" />
          <Card.Body>
            <Card.Link to=''>Book Name : {props.username}</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default AuthorCard;