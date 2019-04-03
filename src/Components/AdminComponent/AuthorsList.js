
import React from 'react';
import { thead, tr, Table, Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import { MyContext } from '../../App'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const uuidv1 = require('uuid/v1');


export  class AuthorsListing extends React.Component {
    constructor(props) {
        super(props);

        this.OpenAddPopUp = this.OpenAddPopUp.bind(this);
        this.ColseAddPopUp = this.ColseAddPopUp.bind(this);
        this.Typing = this.Typing.bind(this);
        this.TypingEditCategory = this.TypingEditCategory.bind(this);
        this.ColseEditPopUp = this.ColseEditPopUp.bind(this);

        this.state = {

            PhotoUrl:'',
            FirstName:'',
            LastName:'',
            DateOfBirth:'',
            Description:'',
            

            NewAuthorPopSHow: false,
            EditPopShow: false,
            // addnewCategoryName: '',
            // EditedCategoryName: '',
            EditedAuthorValues: [],
            NewEditedValues:[
                
            ]
        }

    }
    ColseEditPopUp() {
        this.setState({ EditPopShow: false });
    }

    OpenEditPopUp = (value) => (e) => {
        this.setState({ EditPopShow: true, EditedAuthorValues: value });
    }

    TypingEditCategory(e) {
        
        const value = e.target.value;
        this.setState({ EditedCategoryName: value });
    }

    SaveEdit = (inputvalue, id) => (e) => {
        inputvalue.EditAuthor(id, this.state.NewEditedValues)
        this.setState({ EditPopShow: false })
    }

    OpenAddPopUp() {
        this.setState({ NewAuthorPopSHow: true });
    }

    ColseAddPopUp() {
        this.setState({ NewAuthorPopSHow: false });
    }

    Typing(e) {
        const name = e.target.name;
        const value = e.target.value;

        console.log(value, name)

        this.setState({ [name]: value });
        // const value = e.target.value;
        // this.setState({ addnewCategoryName: value });
    }

    AddNewAuthor = (inputvalue) => (e) => {

        const photo = this.state.PhotoUrl;
        const FirstName = this.state.FirstName;
        const LastName = this.state.LastName;
        const DateOfBirth = this.state.DateOfBirth;
        const Description = this.state.Description;



        if (!FirstName && !photo && !LastName && !DateOfBirth &!Description) return;
        const Author = {
            ID: uuidv1(), photo,FirstName,LastName,DateOfBirth,Description ,deleted: false
        };
        console.log(Author)
        inputvalue.AddNewAuthor(Author)
        this.setState({
            NewAuthorPopSHow: false,
            PhotoUrl:'',
            FirstName:'',
            LastName:'',
            DateOfBirth:'',
            Description:'',
            
           
        })
    }

    DeleteAuthor = (inputvalue, id) => (e) => {
        inputvalue.DeleteAuthor(id)
    }


    render() {
        return (
            <MyContext.Consumer>
                {
                    value => (
                        <React.Fragment>

                            <Container>
                                <Row>
                                    <Col md={{ span: 6, offset: 8 }}><Button className="AddNewCategory" variant="primary" onClick={this.OpenAddPopUp}>Add Author</Button></Col>
                                </Row>
                            </Container>


                            <Container>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            {value.state.Authors.th.map((p, i) => (<td key={uuidv1()}> {p}   </td>))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {value.state.Authors.tbody.filter(c => (!(c.deleted))).map(z =>

                                            <tr key={uuidv1()} >

                                                <td key={uuidv1()}>{z.ID}</td>
                                                <td key={uuidv1()}><img className="AuthorPhoto" src={z.photo} alt={z.photo} /></td>
                                                <td key={uuidv1()}>{z.FirstName}</td>
                                                <td key={uuidv1()}>{z.LastName}</td>
                                                <td key={uuidv1()}>{z.DateOfBirth}</td>

                                                <td>
                                                    <>
                                                        <FontAwesomeIcon className="EditIcon" icon={faEdit} onClick={this.OpenEditPopUp(z)} />
                                                        <FontAwesomeIcon className="DeleteIcon" icon={faTrash} onClick={this.DeleteAuthor(value, z.ID)} />
                                                    </>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>

                            </Container>
                            {/* -------------------------------------new Author---------------------------------------------------- */}
                            <Modal show={this.state.NewAuthorPopSHow} onHide={this.ColseAddPopUp}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridAddress1" >
                                                    <Form.Label >Photo Url</Form.Label>
                                                    <Form.Control value={this.state.PhotoUrl} onChange={this.Typing} name="PhotoUrl" />

                                            <Form.Label >First Name</Form.Label>
                                            <Form.Control value={this.state.FirstName} onChange={this.Typing} name="FirstName" />


                                            <Form.Label >last Name</Form.Label>
                                            <Form.Control value={this.state.LastName} onChange={this.Typing} name="LastName" />
                                            {/* DatePicekr search 3leha fel el upgrades */}
                                            <Form.Label >Date Of Birth</Form.Label>
                                            <Form.Control value={this.state.DateOfBirth} onChange={this.Typing} name="DateOfBirth" />

                                            <Form.Label >Description</Form.Label>
                                            <Form.Control as="textarea" value={this.state.Description} onChange={this.Typing} name="Description" />



                                            </Form.Group>
                                        </Form.Row>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.ColseAddPopUp}>
                                        Close
            </Button>
                                    <Button variant="primary" onClick={this.AddNewAuthor(value)}>
                                        Add
            </Button>
                                </Modal.Footer>
                            </Modal>
                            {/* -------------------------------------------Edit---------------------------------------------------- */}

                            <Modal show={this.state.EditPopShow} onHide={this.ColseEditPopUp}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridAddress1" >

                                            <Form.Label >Photo Url</Form.Label>
                                            <Form.Control placeholder={this.state.EditedAuthorValues.photo} value={this.state.PhotoUrl} onChange={this.Typing} name="PhotoUrl" />

                                            <Form.Label >First Name</Form.Label>
                                            <Form.Control placeholder={this.state.EditedAuthorValues.FirstName} value={this.state.FirstName} onChange={this.Typing} name="FirstName" />

                                            <Form.Label >Last Name</Form.Label>
                                            <Form.Control placeholder={this.state.EditedAuthorValues.LastName} value={this.state.NewEditedValues.LastName} onChange={this.Typing} name="LastName" />

                                            <Form.Label >Date Of Birth</Form.Label>
                                            <Form.Control placeholder={this.state.EditedAuthorValues.DateOfBirth} value={this.state.NewEditedValues.DateOfBirth} onChange={this.Typing} name="DateOfBirth" />

                                            <Form.Label >Description</Form.Label>
                                            <Form.Control as="textarea" placeholder={this.state.EditedAuthorValues.description} value={this.state.NewEditedValues.description} onChange={this.Typing} name="description" />


                                            </Form.Group>
                                        </Form.Row>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.ColseEditPopUp}>
                                        Close
                </Button>
                                    <Button variant="primary" onClick={this.SaveEdit(value, this.state.EditedAuthorValues.ID)}>
                                        Save Changes
            </Button>
                                </Modal.Footer>
                            </Modal>

                        </React.Fragment>
                    )
                }
            </MyContext.Consumer>
        );
    }
}
