import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';

const AddPerson = ({ addPerson }) => {
    const [person, setPerson] = useState({ id: uuidv4(), name: "", age: "" });
    
    const submitHandle = (event) => {
        event.preventDefault();
        addPerson(person);
        setPerson({ id: uuidv4(), name: "", age: "" });
    };
    
    const changePerson = (event) => {
        const {name, value} = event.target;
        setPerson((oldPerson)=>({...oldPerson, [name]:value}));
    };

    return (
        <Form onSubmit={submitHandle} className="d-flex flex-column flex-sm-row flex-wrap align-items-center justify-content-center gap-3 mb-3">
            <input type="hidden" name="id" value={person.id}></input>
            <Form.Group controlId="person">
                <Form.Control type="text" name="name" placeholder="Enter Name" value={person.name} onChange={changePerson} required />
            </Form.Group>
            <Form.Group controlId="person">
                <Form.Control type="number" name="age" placeholder="Enter Age" value={person.age} onChange={changePerson} required />
            </Form.Group>
            <div>
                <Button variant="primary" type="submit">
                    Add Person
                </Button>
            </div>
        </Form>
    );
};

export default AddPerson;