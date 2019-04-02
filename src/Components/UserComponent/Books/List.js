import React from 'react';
// import axios from 'axios';
// import CategoryCard from './card';
import {MyContext} from '../../../App'
import {Container,Row ,Col , Card,Button} from 'react-bootstrap'

export  class DisplayCategoryBooks extends React.Component {
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
        return (
            <MyContext.Consumer>
                {
                    value => (
                        <React.Fragment>
                        
                <div className='category-container'>
                <Container >
                    <Row className="">
                        {value.state.Categories.tbody.map(p => 
                            
                           
                        <Col sm={6} md={3} className="mb-3 ">
        <Card>
          <Card.Img variant="top" src="https://elgarblog.files.wordpress.com/2014/01/education-books.jpg" />
          <Card.Body>
            <Card.Link to=''>Category Name : {p.Name}</Card.Link> 
            <Button onClick={this.DisplayBooks(value,p.ID)}>See all Books</Button>
           
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