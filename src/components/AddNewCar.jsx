import React from 'react';
import { Form, Button } from 'react-bootstrap';

function AddNewCar() {
    
    return (
        <div>
            <Form className="p-4" onSubmit>
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
                <Form.Control as="select" defaultValue="Submitted by" required>
                    <option disabled>Submitted by</option>
                    <option>Bogdan</option>
                    <option>Romeo</option>
                    <option>Ivan</option>
                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={8}>
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default AddNewCar;