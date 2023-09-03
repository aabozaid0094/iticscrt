import React, { useState, useEffect } from 'react';
import User from './User';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setUsers(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <Container className="Users">
            <Row>
                {users.map((u)=><Col xxl="3" lg="4" sm="6" xs="12" className="my-3"><User key={u.id} {...u}></User></Col>)}
            </Row>
        </Container>
    );
};

export default Users;