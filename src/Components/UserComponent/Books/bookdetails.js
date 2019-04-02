import React from 'react';
// import axios from 'axios';

import {MyContext} from '../../../App'
import {Container,Row ,Col , Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export  class BookDetails extends React.Component {
    state = {
        data: [],

    }
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => {
    //             const data = response.data;
    //             this.setState({ data });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
DisplayBooks =(value, id) =>(e) =>{

}

    render() {
        const idd =+this.props.match.params.id;
        return (
            <MyContext.Consumer>
                {
                    value => (
                        <React.Fragment>
                        
                <div className='category-container'>
                <Container >
                    <Row className="">
                    {value.state.Books.tbody.filter(c=>(c.CategoryId=== idd)).map(p => 
                        
                            
                           
                        <Col sm={6} md={3} className="mb-3 ">
        <Card>
          <Card.Img variant="top" src="https://elgarblog.files.wordpress.com/2014/01/education-books.jpg" />
          <Card.Body>book decsription : {p.description}
            
            {/* <Button onClick={this.DisplayBooks(value,p.ID)}>See all Books</Button> */}
           
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