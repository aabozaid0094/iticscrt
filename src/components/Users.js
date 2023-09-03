import React, { useState, useEffect } from 'react';
import User from './User';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <Container className="Users">
            <Row className="justify-content-center">
                {users.map((u)=><User key={u.id} {...u}></User>)}
            </Row>
        </Container>
    );
};

export default Users;