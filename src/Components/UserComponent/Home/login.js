import React from 'react'
import SimpleSchema from 'simpl-schema';
import { Form, Button, Row , Col ,Container } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            errors: [],
    
        }
    }
    handleChange= (e)=>{
       const {name }= e.target;
       const {value}= e.target;
       this.setState({[name]:value})
       console.log({name,value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {username , password} = this.state;
        const validationContext = new SimpleSchema({
            username: {
                type:String,
                optional: true,
            },
            password:{
                type:String,
                optional: true,
                min:6
            }
        
          }).newContext();
           
          validationContext.validate({username, password});
          if (validationContext.isValid()) {
            this.props.history.push("/category");
          }
          console.log(validationContext.validationErrors());
    }
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col sm="5">
                            <h2>Welcome To Good Reads</h2>
                            <Link to="/category">category</Link>
                        </Col>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                                {/* <Form.Group controlId="formBasicEmail"> */}
                                <Row>


                                <Col sm={5}>
                                    {/* <Form.Label>UserName</Form.Label> */}
                                    <Form.Control type="text" placeholder="Enter UserName" name="username" onChange={this.handleChange} value={this.state.username} />
                                
                                </Col>
                                {/* </Form.Group> */}

                                {/* <Form.Group controlId="formBasicPassword"> */}
                                <Col sm={5} >
                                    {/* <.Label>Password</Form.Label> */}
                                    <Form.Control type="password" placeholder="Password" onChange={this.handleChange} name="password" value={this.state.password}/>
                                
                                </Col>
                                <Col sm={2}>
                                <Button variant="primary" type="submit">
                                    Log In
                                </Button>
                                </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </>
        )
    }
}
export default withRouter(Login);