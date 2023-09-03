import React, { useState, useEffect } from 'react';
import User from './User';

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
        <div className="Users">
            {users.map((u)=><User key={u.id} {...u}></User>)}
        </div>
    );
};

export default Users;