import React from 'react'
import { CategoriesList } from './CategoriesList'
import {BooksListing} from './BooksListing'
import {AuthorsListing} from './AuthorsList'
import { MyContext } from '../../App'
import {Container,Row,Col,ButtonGroup,Button,Table,Form,Pagination} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import {WantReadBooks} from './WantReadBooks'
import {WillReadBooks} from './CurrentlyReadingBooks'
import {ReadBooks} from './ReadBooks'

const uuidv4 = require('uuid/v4');


export class UserDashBoard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
         
        }
    }

render() 
{
return (
    <MyContext.Consumer>{
        
        value => (
            <React.Fragment>
                <Container>
                    <Row className="margin-top">
                        <Col md={2} className="margin-top">
                           
                            <ButtonGroup vertical >
                            <Button variant="secondary">All</Button><br/>
                            <Button href="/ReadBooks">Read</Button><br/>
                            <Button href="/CurrentlyReadingBooks" variant="secondary">Currently Reading </Button><br/>
                            <Button href="/WantReadBooks">Want To Read </Button>
                            </ButtonGroup>
                           
                        </Col>

                        <Col md={10} className="align-left">
                            <h2>All Books</h2> 

                        <Table striped bordered hover size="lg">
                            <thead>
                                <tr>
                                <th> Cover </th>
                                <th> Name</th>
                                <th> Author </th>
                                <th> Avg Rating </th>
                                <th> Rating </th>
                                <th> Shelve </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                <td > <img className="BookPhoto" src="https://elgarblog.files.wordpress.com/2014/01/education-books.jpg" /> </td>
                                <td ><a href=""> Book Name </a> </td>
                                <td ><a href=""> Author</a> </td>
                                <td > 
                                <span>
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                </span>
                                </td>
                                <td > 
                                <span>
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                </span>
                                </td>
                                <td > 
                                <Form.Control as="select" name="userBookAction" size="sm" >
                                    <option > Read </option>
                                    <option > Want To Read </option>
                                    <option > Currently Reading </option>   
                                </Form.Control>
                                </td>
                                </tr>
                               
                                <tr >
                                <td > <img className="BookPhoto" src="https://elgarblog.files.wordpress.com/2014/01/education-books.jpg" /> </td>
                                <td ><a href=""> Book Name </a> </td>
                                <td ><a href=""> Author</a> </td>
                                <td > 
                                <span>
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                 
                                </span>
                                </td>
                                <td > 
                                <span>
                                   
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                </span>
                                </td>
                                <td > 
                                <Form.Control as="select" name="userBookAction" size="sm" >
                                    <option > Currently Reading </option>   
                                    <option > Want To Read </option>
                                    <option > Read </option>
                                </Form.Control>
                                </td>
                                </tr>
                               
                                <tr >
                                <td > <img className="BookPhoto" src="https://elgarblog.files.wordpress.com/2014/01/education-books.jpg" /> </td>
                                <td ><a href=""> Book Name </a> </td>
                                <td ><a href=""> Author</a> </td>
                                <td > 
                                <span>
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                </span>
                                </td>
                                <td > 
                                <span>
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                </span>
                                </td>
                                <td > 
                                <Form.Control as="select" name="userBookAction" size="sm" >
                                    <option > Read </option>
                                    <option > Want To Read </option>
                                    <option > Currently Reading </option>   
                                </Form.Control>
                                </td>
                                </tr>
                               
                                <tr >
                                <td > <img className="BookPhoto" src="https://elgarblog.files.wordpress.com/2014/01/education-books.jpg" /> </td>
                                <td ><a href=""> Book Name </a> </td>
                                <td ><a href=""> Author</a> </td>
                                <td > 
                                <span>
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                </span>
                                </td>
                                <td > 
                                <span>
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                </span>
                                </td>
                                <td > 
                                <Form.Control as="select" name="userBookAction" size="sm" >
                                    <option > Read </option>
                                    <option > Want To Read </option>
                                    <option > Currently Reading </option>   
                                </Form.Control>
                                </td>
                                </tr>
                               
                                <tr >
                                <td > <img className="BookPhoto" src="https://elgarblog.files.wordpress.com/2014/01/education-books.jpg" /> </td>
                                <td ><a href=""> Book Name </a> </td>
                                <td ><a href=""> Author</a> </td>
                                <td > 
                                <span>
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                </span>
                                </td>
                                <td > 
                                <span>
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                </span>
                                </td>
                                <td > 
                                <Form.Control as="select" name="userBookAction" size="sm" >
                                    <option > Want To Read </option>
                                    <option > Read </option>
                                    <option > Currently Reading </option>   
                                </Form.Control>
                                </td>
                                </tr>
                               
                                <tr >
                                <td > <img className="BookPhoto" src="https://elgarblog.files.wordpress.com/2014/01/education-books.jpg" /> </td>
                                <td ><a href=""> Book Name </a> </td>
                                <td ><a href=""> Author</a> </td>
                                <td > 
                                <span>
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                </span>
                                </td>
                                <td > 
                                <span>
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    <FontAwesomeIcon className="RateIcon" icon={faStar} />
                                    
                                </span>
                                </td>
                                <td > 
                                <Form.Control as="select" name="userBookAction" size="sm" >
                                    <option > Want To Read </option>
                                    <option > Read </option>
                                    <option > Currently Reading </option>   
                                </Form.Control>
                                </td>
                                </tr>
                               
                            </tbody>
                            </Table>

                            <br/><br/>
                     <Pagination className="align-center">
                           <Pagination.Prev />
                           <Pagination.Item>{1}</Pagination.Item>
                           <Pagination.Item active>{2}</Pagination.Item>
                           <Pagination.Item>{3}</Pagination.Item>
                           <Pagination.Item >{4}</Pagination.Item>
                           <Pagination.Item >{5}</Pagination.Item>
                           <Pagination.Next />
                           </Pagination>

                        </Col>
                    </Row>
                </Container>

                 

        </React.Fragment>
                    )
                }
</MyContext.Consumer>
)
}}
