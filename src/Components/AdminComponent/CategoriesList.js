
import React from 'react';
import { thead, tr, Table, Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import { MyContext } from '../../App'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const uuidv1 = require('uuid/v1');


export class CategoriesList extends React.Component {
    constructor(props) {
        super(props);

        this.OpenAddPopUp = this.OpenAddPopUp.bind(this);
        this.ColseAddPopUp = this.ColseAddPopUp.bind(this);
        this.TypingNewCategory = this.TypingNewCategory.bind(this);
        this.TypingEditCategory = this.TypingEditCategory.bind(this);
        this.ColseEditPopUp = this.ColseEditPopUp.bind(this);

        this.state = {
            NewCategoryPopSHow: false,
            EditPopShow: false,
            addnewCategoryName: '',
            EditedCategoryName: '',
            CategoryValues: []
        }

    }
    ColseEditPopUp() {
        this.setState({ EditPopShow: false });
    }

    OpenEditPopUp = (value) => (e) => {
        this.setState({ EditPopShow: true, CategoryValues: value });
    }

    TypingEditCategory(e) {
        const value = e.target.value;
        this.setState({ EditedCategoryName: value });
    }

    SaveEdit = (inputvalue, id) => (e) => {
        inputvalue.EditCategory(id, this.state.EditedCategoryName)
        this.setState({ EditPopShow: false })
    }

    OpenAddPopUp() {
        this.setState({ NewCategoryPopSHow: true });
    }

    ColseAddPopUp() {
        this.setState({ NewCategoryPopSHow: false });
    }

    TypingNewCategory(e) {  
        const value = e.target.value;
        this.setState({ addnewCategoryName: value });
    }

    AddNewCategory = (inputvalue) => (e) => {
        const CategoryName = this.state.addnewCategoryName;
        if (!CategoryName) return;
        const Category = {
            ID: uuidv1(), Name: CategoryName, deleted: false
        };
        inputvalue.AddCategory(Category)
        this.setState({ NewCategoryPopSHow: false, CategoryName: '' })
    }

    DeleteCategory = (inputvalue, id) => (e) => {
        inputvalue.DeleteCategory(id)
    }


    render() {
        return (
            <MyContext.Consumer>
                {
                    value => (
                        <React.Fragment>
                        
                            <Container>
                                <Row>
                                    <Col md={{ span: 6, offset: 8 }}><Button className="AddNewCategory" variant="primary" onClick={this.OpenAddPopUp}>Add New CAtegory</Button></Col>
                                </Row>
                            </Container>


                            <Container>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            {value.state.Categories.th.map((p, i) => (<td key={uuidv1()}> {p}   </td>))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {value.state.Categories.tbody.filter(c => (!(c.deleted))).map(z =>

                                            <tr key={uuidv1()} >

                                                <td key={uuidv1()}>{z.ID}</td>
                                                <td key={uuidv1()}>{z.Name}</td>
                                                <td>
                                                    <>
                                                        <FontAwesomeIcon className="EditIcon" icon={faEdit} onClick={this.OpenEditPopUp(z)} />
                                                        <FontAwesomeIcon className="DeleteIcon" icon={faTrash} onClick={this.DeleteCategory(value, z.ID)} />
                                                    </>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>

                            </Container>
                            {/* -------------------------------------new cat---------------------------------------------------- */}
                            <Modal show={this.state.NewCategoryPopSHow} onHide={this.ColseAddPopUp}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridAddress1" >
                                                <Form.Label >Name Of The Category</Form.Label>

                                                <Form.Control value={this.state.addnewCategoryName} onChange={this.TypingNewCategory} />
                                            </Form.Group>
                                        </Form.Row>



                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.ColseAddPopUp}>
                                        Close
            </Button>
                                    <Button variant="primary" onClick={this.AddNewCategory(value)}>
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
                                                <Form.Label >Name Of The Category</Form.Label>
                                                <Form.Control placeholder={this.state.CategoryValues.Name} value={this.state.EditedCategoryName} onChange={this.TypingEditCategory} />
                                            </Form.Group>
                                        </Form.Row>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.ColseEditPopUp}>
                                        Close
                </Button>
                                    <Button variant="primary" onClick={this.SaveEdit(value, this.state.CategoryValues.ID)}>
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
