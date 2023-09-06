import React, { useState } from 'react';
import AddPerson from './AddPerson';
import Person from './Person';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { v4 as uuidv4 } from 'uuid';

const People = () => {
    const [people, setPeople] = useState([
        {id:uuidv4(), name:"Ahmed", age:30},
        {id:uuidv4(), name:"Mohamed", age:25},
        {id:uuidv4(), name:"Nada", age:27},
        {id:uuidv4(), name:"Reem", age:23}
    ]);

    const addPerson = person => setPeople(oldPeople=>[...oldPeople, {...person, age:+person.age}]);

    return (
        <Container className="People">
            <AddPerson addPerson={addPerson}></AddPerson>
            <Row className="justify-content-center">
                {people.map((p)=><Person key={p.id} {...p}></Person>)}
            </Row>
        </Container>
    );
};

export default People;