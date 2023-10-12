import React from "react";
import { useState, useEffect } from "react";
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setUsers(json)
            })
    }, []);
    return (
        <section>
            {users.map((user) => {
                return (
                    <div className="user" key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.address.street}</p>
                        <p>{user.address.suite}</p>
                        <p>{user.address.city}</p>
                    </div>
                )
            }
            )}
        </section>)
};
export default Users;