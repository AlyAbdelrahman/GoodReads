import React from 'react';
import {MyContext} from '../../../App'
import {Container,Row ,Col , Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const uuidv1 = require('uuid/v1')

export  class DisplayCategoryBooks extends React.Component {
 

    render() {
        const idd =+this.props.match.params.id;
        console.log(idd)
      
        return (

            <MyContext.Consumer>
                {
                    value => (
                        <React.Fragment>
                        
                <div className='category-container'>
                <Container >
                    <Row className="">
                        {console.log('hello from list' )}
                        {value.state.Books.tbody.filter(c=>(c.CategoryId=== idd)).map(p => 
                           
                           <Col sm={6} md={3} className="mb-3 " key={uuidv1()}>
                           
        <Card>
          <Card.Img variant="top" src="https://elgarblog.files.wordpress.com/2014/01/education-books.jpg" />
          <Card.Body>
            <Link to={`/BookDetails/${p.ID}`}>Book Name : {p.Name}</Link> 
           
           
          </Card.Body>
        </Card>
   
      </Col>
                   )}      
                    </Row>
                </Container>
               </div>
               </React.Fragment>
                    
               )
                }
            </MyContext.Consumer>
        )
    }
}