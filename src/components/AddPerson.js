import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';

const AddPerson = ({ AddPerson }) => {
    const [person, setPerson] = useState({ id: uuidv4() });
    
    const submitHandle = (event) => AddPerson(event, person);
    
    const changePerson = (event) => {
        const {name, value} = event.target;
        setPerson((oldPerson)=>({...oldPerson, [name]:value}));
    };

    return (
        <Form onSubmit={submitHandle} className="row">
            <input type="hidden" name="id" value={person.id}></input>
            <Form.Group className="col-md-6 mb-3" controlId="person">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter Name" value={person.name} onChange={changePerson} />
            </Form.Group>
            <Form.Group className="col-md-6 mb-3" controlId="person">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" name="age" placeholder="Enter Age" value={person.age} />
            </Form.Group>
            <Button variant="primary" type="submit" className="col-md-12">
                Submit
            </Button>
        </Form>
    );
};

export default AddPerson;