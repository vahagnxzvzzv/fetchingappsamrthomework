import React from "react";
import { useState, useEffect } from "react";
import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setPosts(json)
            })
    }, [])
    return (
        <section>
            {posts.map((post) => {
                return (
                    <div className="post" key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                )
            }
            )}
        </section>
    )
};
export default Posts;
