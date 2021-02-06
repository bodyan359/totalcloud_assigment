import React from 'react';
import { Form, Button } from 'react-bootstrap';

function AddNewCar() {
    let car = "";

    return (
        <div>
            <Form className="p-4">
                <p className="h4">Add New</p>
            <Form.Group controlId="formBasicMake">
                <Form.Control type="Normal text" placeholder="Car Make" required/>
            </Form.Group>

            <Form.Group controlId="formBasicModel">
                <Form.Control type="Normal text" placeholder="Car Model" required/>
            </Form.Group>

            <Form.Group controlId="formBasicYear">
                <Form.Control type="Normal text" placeholder="Production Year" required/>
            </Form.Group>

            <Form.Group controlId="formCarPhoto">
                <Form.Control type="Normal text" placeholder="Car Photo" />
            </Form.Group>

            <Form.Group controlId="formInfoUrl">
                <Form.Control type="Normal text" placeholder="More Info Url" required/>
            </Form.Group>

            <Form.Group controlId="formGridState">
                <Form.Control as="select" required defaultValue="Submitted by" >
                        <option disabled>Submitted by</option>
                        <option value="Bogdan">Bogdan</option>
                        <option value="Romeo">Romeo</option>
                        <option value="Ivan">Ivan</option>
                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default AddNewCar;