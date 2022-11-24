import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';









export function BioData({ Biodata, setBiodata }) {
    var tempObject = {};


    const handleSubmit = (evt) => {
        evt.preventDefault();
        evt.target.reset();
        setBiodata([...Biodata, tempObject]);
    };

    ////start
    return (
        // Form-container
        <div className="Biodata-container">
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    {/* ID */}
                    <Form.Group as={Col} controlId="Id">
                        <Form.Label>ID</Form.Label>
                        <Form.Control placeholder="Enter ID"
                            onBlur={(evt) => { tempObject.Id = evt.target.value; }} required
                        />
                    </Form.Group>
                    {/* First Name Row */}
                    <Form.Group as={Col} controlId="FirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First Name"
                            onBlur={(evt) => { tempObject.FirstName = evt.target.value; }} required
                        />

                    </Form.Group>
                    {/* Last Name Row */}
                    <Form.Group as={Col} controlId="Lastname">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control placeholder="Last Name"
                            onBlur={(evt) => { tempObject.LastName = evt.target.value; }} required
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    {/* Email Address */}
                    <Form.Group as={Col} controlId="Email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com"
                            onBlur={(evt) => { tempObject.Email = evt.target.value; }} required
                        />
                    </Form.Group>
                    {/* Gender */}
                    <Form.Group as={Col} controlId="Gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select onBlur={(evt) => { tempObject.Gender = evt.target.value; }}>
                            <option>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer not to specify">Prefer not to specify</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    {/* Designation */}
                    <Form.Group as={Col} controlId="Designation">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control placeholder="Designation"
                            onBlur={(evt) => { tempObject.Designation = evt.target.value; }} required
                        />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}


//Validation
// import { useFormik } from "formik";
// import * as yup from "yup";
// const BiodataValidationSchema = yup.object({
//     Id: yup
//         .string()
//         .min(0, "Enter Valid Id")
//         .max(10, "Please check the Id you have entered")
//         .required("Please fill the Id?")
//         .matches(/^[0-9A-Z]+$/, "Not a valid Id format"),
//     FirstName: yup
//         .string()
//         .min(3, "Please type in your First Name")
//         .required("Please type in your First Name?")
//         .matches(/^[A-Za-z]+$/, "Only alphabets are allowed"),
//     LastName: yup
//         .string()
//         .min(1, "Please type in your Last Name")
//         .required("Please type in your Last Name?")
//         .matches(/^[A-Za-z]+$/, "Only alphabets are allowed"),
//     Email: yup
//         .string()
//         .min(5, "Please enter valid email")
//         .max(20, "Check your input Email address properly")
//         .required("Please provide a valid Email Id?")
//         .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Not a valid email format"),
//     Designation: yup
//         .string()
//         .min(4, "Enter your designation")
//         .required("Please fill in your designation?")
//         .matches(/^[A-Za-z]+$/, "Only alphabets are allowed"),
// })
// const formik = useFormik({
//     initialValues: { Id: "", FirstName: "", LastName: "", Email: "", Designation: "" },
//     validationSchema: BiodataValidationSchema,
//     onSubmit: (evt) => {
//         handleSubmit(evt);
//     }
// })
