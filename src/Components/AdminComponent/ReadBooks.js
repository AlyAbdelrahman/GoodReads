import React from 'react';
import  {Container,Row,Col,ButtonGroup,Button,Table,Form,Pagination} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

export class ReadBooks extends React.Component
{
      render(){
      return(
         <>
            <Container>
               <Row className="margin-top">
                  <Col md={3} className="margin-top custom">
                  <ul>
                                <li><Link to="/UserProfile" className="">All</Link></li>
                                <li> <Link to="/ReadBooks">Read</Link></li>
                                <li><Link to="/CurrentlyReadingBooks">Currently Reading </Link><br/></li>
                                <li><Link to="/WantReadBooks">Want To Read </Link></li>
                            </ul>
                  </Col>
                  <Col md={9} className="align-left">
                  <h2>Read Books </h2> 

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
                                 <option > Currently Reading </option>   
                                 <option > Want To Read </option>
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
                                    <option > Read </option>
                                    <option > Currently Reading </option>   
                                    <option > Want To Read </option>
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
                                 <option > Currently Reading </option>   
                                 <option > Want To Read </option>
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
                                    <option > Read </option>
                                    <option > Currently Reading </option>   
                                    <option > Want To Read </option>
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
                                 <option > Currently Reading </option>   
                                 <option > Want To Read </option>
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
                                    <option > Read </option>
                                    <option > Currently Reading </option>   
                                    <option > Want To Read </option>
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

   </>
    );
}
}
