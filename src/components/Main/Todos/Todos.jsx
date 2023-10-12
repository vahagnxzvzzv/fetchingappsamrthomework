import React from "react";
import { useState, useEffect } from "react";
import './Todos.css';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setTodos(json)
                console.log(json);
            })
    }, [])
    return (
        <section>
            {todos.map((todo) => {
                return (
                    <div className="todo" key={todo.id}>
                        <h4>{todo.id}</h4>
                        <p>{todo.title}</p>
                    </div>
                )
            }
            )}
        </section>
    )
};
export default Todos;