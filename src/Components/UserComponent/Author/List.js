import React from 'react';
import axios from 'axios';
import AuthorCard from './Card';
import {Container,Row} from 'react-bootstrap'

export default class AuthorList extends React.Component {
    state = {
        data: [],
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const data = response.data;
                this.setState({ data });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <>
                <div className='card-container'>
                <Container >
                    <Row className="">
                        {this.state.data.map(p => <AuthorCard key={p.id} username={p.username} {...p} />)}
                    </Row>
                </Container>
               </div>
            </>
        )
    }
}