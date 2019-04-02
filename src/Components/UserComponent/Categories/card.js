import React from 'react'
import './category.css'
import { Button, Card, Col, Row, Container } from 'react-bootstrap'
import {BrowserRouter as Link } from 'react-router-dom';


const CategoryCard = (props) => {
  return (

    <>

      <Col sm={6} md={3} className="mb-3 ">
        <Card>
          <Card.Img variant="top" src="https://elgarblog.files.wordpress.com/2014/01/education-books.jpg" />
          <Card.Body>
            <Card.Link to=''>Book Name : {props.username}</Card.Link> <br/>
            <Card.Link to=''>Book Name : {props.name}</Card.Link>
          </Card.Body>
        </Card>
      </Col>



      {/* 
        <div className="category-list">
        <img className="img" alt="poster" src='https://elgarblog.files.wordpress.com/2014/01/education-books.jpg'/>  
          <div className='overlay'>
            <h3><span>Book : </span>{props.username}</h3>
            <h3><span>Book : </span>{props.name}</h3>
          </div>
        </div> */}
    </>
  )
}

export default CategoryCard;