import React from "react";
import { useState, useEffect } from "react";
import './Comments.css';

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => {
                setComments(json)
            })
    }, [])
    return (
        <section>
            {comments.map((comment) => {
                return (
                    <div className="comment" key={comment.id}>
                        <h3>{comment.name}</h3>
                        <h4>{comment.email}</h4>
                        <p>{comment.body}</p>
                    </div>
                )
            }
            )}
        </section>
    )
};
export default Comments;