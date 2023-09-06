import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import User from './User';
import PuffLoader from "react-spinners/ClipLoader";

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
                {
                    (!users.length>0)
                        ? <PuffLoader className="my-3" color="#dee2e6" />
                        : users.map((u)=><User key={u.id} {...u}></User>)
                }
            </Row>
        </Container>
    );
};

export default Users;