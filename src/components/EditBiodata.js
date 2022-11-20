import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export function EditBiodata({ value, index, Biodata, setBiodata }) {
    let tempObject = { ...value };
    let temp = [...Biodata];
    const handleSubmit = (evt) => {
        evt.preventDefault();
        temp.splice(index, 1, tempObject);
        setBiodata(temp);
        handleClose();
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button onClick={handleShow}><FontAwesomeIcon icon={faPen} /></button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            {/* ID */}
                            <Form.Group as={Col} controlId="Id">
                                <Form.Label>ID</Form.Label>
                                <Form.Control placeholder="Enter ID"
                                    onBlur={(evt) => { tempObject.Id = evt.target.value; }}
                                    defaultValue={tempObject.Id}
                                    required
                                />
                            </Form.Group>
                            {/* First Name Row */}
                            <Form.Group as={Col} controlId="FirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First Name"
                                    onBlur={(evt) => { tempObject.FirstName = evt.target.value; }}
                                    defaultValue={tempObject.FirstName} required
                                />

                            </Form.Group>
                            {/* Last Name Row */}
                            <Form.Group as={Col} controlId="Lastname">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control placeholder="Last Name"
                                    onBlur={(evt) => { tempObject.LastName = evt.target.value; }}
                                    defaultValue={tempObject.LastName} required
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            {/* Email Address */}
                            <Form.Group as={Col} controlId="Email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com"
                                    onBlur={(evt) => { tempObject.Email = evt.target.value; }}
                                    defaultValue={tempObject.Email} required
                                />
                            </Form.Group>
                            {/* Gender */}
                            <Form.Group as={Col} controlId="Gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select defaultValue="Select Gender"
                                    onBlur={(evt) => { tempObject.Gender = evt.target.value; }} required>
                                    <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Prefer not to specify</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            {/* Designation */}
                            <Form.Group as={Col} controlId="Designation">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control placeholder="Designation"
                                    onBlur={(evt) => { tempObject.Designation = evt.target.value; }}
                                    defaultValue={tempObject.Designation} required
                                />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>

    );

}

/*
 <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            {/* ID 
<Form.Group as={Col} controlId="Id">
    <Form.Label>ID</Form.Label>
    <Form.Control placeholder="ID"
        onBlur={(evt) => { tempObject.Id = evt.target.value; }} required
    />
</Form.Group>
{/* First Name Row 
<Form.Group as={Col} controlId="FirstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control placeholder="First Name"
        onBlur={(evt) => { tempObject.FirstName = evt.target.value; }} required
    />

</Form.Group>
{/* Last Name Row 
<Form.Group as={Col} controlId="Lastname">
    <Form.Label>Last name</Form.Label>
    <Form.Control placeholder="Last Name"
        onBlur={(evt) => { tempObject.LastName = evt.target.value; }} required
    />
</Form.Group>
                        </Row >
                        <Row className="mb-3">
                            {/* Email Address 
                            <Form.Group as={Col} controlId="Email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com"
                                    onBlur={(evt) => { tempObject.Email = evt.target.value; }} required
                                />
                            </Form.Group>
                            {/* Gender 
                            <Form.Group as={Col} controlId="Gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select defaultValue="Select Gender" onBlur={(evt) => { tempObject.Gender = evt.target.value; }}>
                                    <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Prefer not to specify</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            {/* Designation 
                            <Form.Group as={Col} controlId="Designation">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control placeholder="Designation"
                                    onBlur={(evt) => { tempObject.Designation = evt.target.value; }} required
                                />
                            </Form.Group>
                        </Row>
                    </Form >
*/