import React from 'react';
import {MyContext} from '../../../App'
import {Container,Row, Col, Image,Form} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export  class BookDetails extends React.Component {


    render() {
        const idd =+this.props.match.params.id;
        return (
            <MyContext.Consumer>
                {
                    value => (
                        <React.Fragment>
                      <Container>
            <Row className="margin-top">
            {value.state.Books.tbody.filter(c=>(c.CategoryId=== idd)).map(p => 
            <>
              <Col xs={6} md={4}>
                <Image  src="https://elgarblog.files.wordpress.com/2014/01/education-books.jpg" thumbnail />
               <br/><br/>
               <Form.Control as="select" name="userBookAction"  >
                    <option > Want To Read </option>
                    <option > Read </option>
                    <option > Currently Reading </option>   
                </Form.Control>
                <br/>
                <span className="align-left">
                <FontAwesomeIcon className="RateIcon" icon={faStar} />
                <FontAwesomeIcon className="RateIcon" icon={faStar} />
                <FontAwesomeIcon className="RateIcon" icon={faStar} />
                <FontAwesomeIcon className="RateIcon" icon={faStar} />
                <FontAwesomeIcon className="RateIcon" icon={faStar} />
                </span>

              </Col>
              <Col xs={6} md={8} className="align-left">
                <h1>{p.Name}</h1>
                
                {value.state.Authors.tbody.filter(z=>(z.ID===idd)).map(m=>(

                <h3>
                   {m.FirstName+' ' + m.LastName} 
                </h3>
                 ))
                } 
                 {value.state.Categories.tbody.filter(z=>(z.ID===idd)).map(m=>(

                    <h3>
                    {m.Name} 
                    </h3>
                    ))
                    } 
                   
                <FontAwesomeIcon className="RateIcon" icon={faStar} />
                <FontAwesomeIcon className="RateIcon" icon={faStar} />
                <FontAwesomeIcon className="RateIcon" icon={faStar} />
                <FontAwesomeIcon className="RateIcon" icon={faStar} />
                <FontAwesomeIcon className="RateIcon" icon={faStar} />
                <span> 3.2 - 55 ratings </span> <br/><br/>

                <p>

                    <h2> Description</h2>
                        {p.description}
                     
                </p>
              </Col>
              </>
             )
             
             }
            </Row>
          </Container>
         <br/><br/><br/>
            
            
                
               </React.Fragment>
                    
               )
                }
            </MyContext.Consumer>
        )
    }
}

        