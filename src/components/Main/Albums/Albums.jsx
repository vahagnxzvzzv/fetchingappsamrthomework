import React, { useState } from "react";
import { useEffect } from "react";
import './Albums.css';

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => {
                setAlbums(json)
            })
    }, [])
    return (
        <section>
            {albums.map((album) => {
                return (
                    <div className="album" key={album.id}>
                        <p>{album.id}</p>
                        <p>{album.title}</p>
                    </div>
                )
            }
            )}
        </section>
    )
};
export default Albums;